import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import { createStore, applyMiddleware } from "redux"

import {postsApp} from "./reducers"

let store = createStore(
  postsApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    createLogger() // neat middleware that logs actions
  )
)

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Stop listening to state updates
unsubscribe()
