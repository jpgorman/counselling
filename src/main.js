import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import {Home, About, Contact} from "./pages/"
import {pageWrapper} from "./page-wrapper"
import {onMountScrollToAnchor} from "./components/core/onMountScrollToAnchor"

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={(props) => props.children}>
      <IndexRoute component={onMountScrollToAnchor(pageWrapper(Home))} />
      {/* add the routes here */}
      <Route path="/about" component={onMountScrollToAnchor(pageWrapper(About))}/>
      <Route path="/contact" component={onMountScrollToAnchor(pageWrapper(Contact))}/>
    </Route>
  </Router>
), document.getElementById("root"))
