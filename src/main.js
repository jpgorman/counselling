import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import {Home, About, Contact, Counselling} from "./pages/"
import {pageWrapper} from "./page-wrapper"
import {onMountScrollToAnchor} from "./components/core/onMountScrollToAnchor"
import {withTracking} from "./components/core/tracking"
import {compose} from "ramda"

function addCoreWrappers(Component) {
  return compose(
    onMountScrollToAnchor,
    pageWrapper,
    withTracking
  )(Component)
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={(props) => props.children}>
      <IndexRoute component={addCoreWrappers(Home)} />
      {/* add the routes here */}
      <Route path="/about" component={addCoreWrappers(About)}/>
      <Route path="/counselling" component={addCoreWrappers(Counselling)}/>
      <Route path="/contact" component={addCoreWrappers(Contact)}/>
    </Route>
  </Router>
), document.getElementById("root"))
