import React, { Component } from "react"

export const AboutPage = () => {
  return (
    <div className="panel">
      <p>This is a minimalistic and opinionated blog framework.</p>

      <p>
        For the blogs to be published, create the blog entries under the <strong>assets/blogs</strong> folder.
        <br />
        Blogs file extension is <i>.md</i> but the content could be either <i>markdown</i> or standard <i>HTML</i>.
      </p>
      <p>Feel free to change the layout and site theme anyway you like.</p>
    </div>
  )
}
