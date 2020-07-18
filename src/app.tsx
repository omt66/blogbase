import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { HomePage } from "./pages/homepage"
import { BlogPage } from "./pages/blogpage"
import { AboutPage } from "./pages/aboutpage"
import { LinkItem } from "./components/linkitem"

export class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">
          <LinkItem to="/">Home</LinkItem>
        </Link>
        <Link to="/about">
          <LinkItem>About</LinkItem>
        </Link>

        <hr />

        <Switch>
          <Route path="/blogs/:id">
            <BlogPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    )
  }
}
