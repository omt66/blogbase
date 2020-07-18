import React, { Component } from "react"
import { Blog } from "../components/blog"
import { blogContents } from "../blogcontent"

export const HomePage = () => {
  return (
    <div>
      <h1>Blog Site</h1>
      <div className="content">
        {/* Create a blog panel one by one */}
        {/* <Blog id="blog1" title="Handcoded Blog Entry">
          Hand code it here
        </Blog> */}
        {/* Or read the blog content and display them... */}
        {blogContents.map((data) => (
          <Blog key={data.id} id={data.id} title={data.title}>
            {data.summary}
          </Blog>
        ))}
      </div>
    </div>
  )
}
