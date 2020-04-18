/* eslint-disable no-undef */

import React from "react"
import ReactDOM from "react-dom"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import {find, propEq} from "ramda"

import {fetchPosts, fetchPost, fetchPage} from "./action-creators"
import {Page, Posts, Post} from "./pages/"
import {hydrate, addCoreWrappers} from "./core"
import {reducers} from "./reducers"

function logger() {
  return MODE === "DEV" ? createLogger() : () => next => action => next(action)
}

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    logger() // neat middleware that logs actions
  )
)

const hydrateRoute = hydrate(store)
const shouldFetchPosts = ({posts}) => posts.entities.length === 0
const shouldFetchPage = ({pages}, {params}) => !find(propEq("uid", params.uid || 'home'))(pages.entities)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={(props) => props.children}>
        <IndexRoute
          component={addCoreWrappers(Page)}
          onEnter={hydrateRoute({
            predicate: shouldFetchPage,
            action: ({params}) => fetchPage(`page/home`),
          })} />
        <Route
          path="/blog"
          component={addCoreWrappers(Posts)}
          onEnter={hydrateRoute({
            predicate: () => true,
            action: () => fetchPosts('posts'),
          })} />
        <Route
          path="/blog/:uid"
          component={addCoreWrappers(Post)}
          onEnter={hydrateRoute({
            predicate: shouldFetchPosts,
            action: ({params}) => fetchPosts(`posts/${params.uid}`),
          })} />
        <Route
          path="/:uid"
          component={addCoreWrappers(Page)}
          onEnter={hydrateRoute({
            predicate: shouldFetchPage,
            action: ({params}) => fetchPage(`page/${params.uid}`),
          })} />
      </Route>
    </Router>
  </Provider>
), document.getElementById("root"))
