import React from "react"
import ReactDOM from "react-dom"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import {compose} from "ramda"

import {Home, About, Contact, Counselling} from "./pages/"
import {pageWrapper} from "./page-wrapper"
import {onMountScrollToAnchor} from "./components/core/onMountScrollToAnchor"
import {withTracking} from "./components/core/tracking"

import {postsApp} from "./reducers"

let store = createStore(
  postsApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    createLogger() // neat middleware that logs actions
  )
)

function addCoreWrappers(Component) {
  return compose(
    onMountScrollToAnchor,
    pageWrapper,
    withTracking
  )(Component)
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={(props) => props.children}>
        <IndexRoute component={addCoreWrappers(Home)} />
        {/* add the routes here */}
        <Route path="/about" component={addCoreWrappers(About)}/>
        <Route path="/counselling" component={addCoreWrappers(Counselling)}/>
        <Route path="/contact" component={addCoreWrappers(Contact)}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById("root"))
