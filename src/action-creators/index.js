import fetch from "isomorphic-fetch"
import actions from "../actions"
import {posts} from "./posts"
import {post} from "./post"

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
