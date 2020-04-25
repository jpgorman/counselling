import fetch from "isomorphic-fetch"
import actions from "../actions"
import createActions from "./createActions"

export const {
  fetchData: fetchPosts
} = createActions(fetch, {
  REQUEST: actions.GET_POSTS_REQUEST,
  SUCCESS: actions.GET_POSTS_SUCCESS,
  ERROR: actions.GET_POSTS_ERROR,
})

export const {
  fetchData: fetchPost
} = createActions(fetch, {
  REQUEST: actions.GET_POST_REQUEST,
  SUCCESS: actions.GET_POST_SUCCESS,
  ERROR: actions.GET_POST_ERROR,
})

export const {
  fetchData: fetchPage
} = createActions(fetch, {
  REQUEST: actions.PAGE_REQUEST,
  SUCCESS: actions.PAGE_SUCCESS,
  ERROR: actions.PAGE_ERROR,
})
