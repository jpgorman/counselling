/*eslint-disable no-undef */

import React from "react"
import ReactDOM from "react-dom"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import {fetchPosts, fetchPost} from "./action-creators"
import {Home, About, Contact, Counselling, Posts, Post} from "./pages/"
import {hydrate, addCoreWrappers} from "./core"
import {postsApp} from "./reducers"

function logger() {
  return MODE === "DEV" ? createLogger() : () => next => action => next(action)
}

let store = createStore(
  postsApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    logger() // neat middleware that logs actions
  )
)

const hydrateRoute = hydrate(store)
const shouldFetchPosts = ({posts}) => posts.entities.length === 0

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={(props) => props.children}>
        <IndexRoute component={addCoreWrappers(Home)} />
        <Route path="/about" component={addCoreWrappers(About)}/>
        <Route
          path="/blog"
          component={addCoreWrappers(Posts)}
          onEnter={hydrateRoute({
            predicate: () => true,
            action: fetchPosts,
          })} />
        <Route
          path="/blog/:uid"
          component={addCoreWrappers(Post)}
          onEnter={hydrateRoute({
            predicate: shouldFetchPosts,
            action: ({params}) => fetchPost(params.uid),
          })} />
        <Route path="/counselling" component={addCoreWrappers(Counselling)}/>
        <Route path="/contact" component={addCoreWrappers(Contact)}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById("root"))
