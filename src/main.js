import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import {App, Home, About, Contact} from "./pages/"

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {/* add the routes here */}
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById("root"))
