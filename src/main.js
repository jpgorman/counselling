import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import {App, Home, About, Training} from "./pages/"

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {/* add the routes here */}
      <Route path="/about" component={About}/>
      <Route path="/training" component={Training}/>
    </Route>
  </Router>
), document.getElementById("root"))
