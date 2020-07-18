import React, { Component } from "react"
import { Link } from "react-router-dom"

interface IBlogProps {
  id: string
  title: string
}

export class Blog extends Component<IBlogProps> {
  render() {
    let { id, title, children } = this.props
    let blogUrl = `/blogs/${id}`

    return (
      <div className="panel">
        <h1>{title}</h1>
        <hr />
        <div className="content">{children}</div>
        <Link to={blogUrl}>
          <button>Read More</button>
        </Link>
      </div>
    )
  }
}
