import React, { Component } from "react"
import { Link } from "react-router-dom"

export const AboutPage = () => {
  return (
    <div className="panel" style={{ textAlign: "left", padding: 20, margin: 20 }}>
      <h1>About Page</h1>
      <hr />
      <p>This is a minimalistic and opinionated blog framework.</p>
      <p>
        For the blogs to be published, create the blog entries under the <strong>assets/blogs</strong> folder, and write the meta data in the
        blogcontents.ts file. Blog file extension is <i>.md</i> but the content could be either <i>markdown</i> or standard <i>HTML</i>.
      </p>
      <p>Feel free to change the layout and site theme anyway you like.</p>
      Check out this <Link to="blogs/blog3">blog</Link> entry for details.
    </div>
  )
}
