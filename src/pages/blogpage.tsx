import React, { Component } from "react"
import { useParams } from "react-router-dom"
import showdown from "showdown"

const converter = new showdown.Converter({
  tables: true,
  strikethrough: true,
  code: true,
  emoji: true,
  quotes: true,
})

const cache: any = {}

export const BlogPage = () => {
  let { id } = useParams()
  console.log("Blog to display: " + id)
  return <BlogPageDetail id={id} />
}

export interface IBlogPageDetailProps {
  id: string
}

export interface IBlogPageDetailState {
  id: string
  html: string
}

export class BlogPageDetail extends Component<IBlogPageDetailProps, IBlogPageDetailState> {
  state = {
    id: "",
    html: "",
  }

  componentDidMount() {
    this.loadBlog(this.props.id)
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.id !== prevState.id) {
      return { id: nextProps.id }
    }
    return null
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.id !== this.props.id) {
      this.loadBlog(this.props.id)
    }
  }

  loadBlog(blogId: string) {
    if (!blogId) return

    let originalId = blogId
    if (cache[originalId]) {
      this.setState({ html: cache[originalId], id: originalId })
      return
    }

    if (blogId.indexOf("assets/") === -1) {
      blogId = `/assets/blogs/${blogId}`
    }

    if (blogId.indexOf(".md") === -1) {
      blogId += ".md"
    }

    fetch(blogId)
      .then((res) => res.text())
      .then((res) => {
        let html = converter.makeHtml(res)
        let regex = /\.\.\/images\//g
        html = html.replace(regex, "/assets/images/")
        cache[originalId] = html
        this.setState({ html, id: originalId })
      })
  }

  render() {
    return (
      <div className="markdown-container">
        <div className="animate__animated animate__fadeIn markdown-content-container">
          <div className="content" dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        </div>
      </div>
    )
  }
}
