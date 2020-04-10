import fetch from "isomorphic-fetch"
import actions from "../actions"
import {posts} from "./posts"
import {post} from "./post"
import createActions from "./createActions"

export const {
  getPosts,
  failedToGetPosts,
  requestPosts,
  fetchPosts
} = posts(fetch, actions)

export const {
  getPost,
  failedToGetPost,
  requestPost,
  fetchPost
} = post(fetch, actions)

export const {
  fetchData: fetchPage
} = createActions(fetch, {
  REQUEST: actions.PAGE_REQUEST,
  SUCCESS: actions.PAGE_SUCCESS,
  ERROR: actions.PAGE_ERROR,
})
