import fetch from "isomorphic-fetch"
import actions from "../actions"

export function getPosts(posts) {
  return {
    type: actions.GET_POSTS_SUCCESS,
    posts,
    isFetching: false,
  }
}

export function failedToGetPosts() {
  return {
    type: actions.GET_POSTS_ERROR,
    isFetching: false,
  }
}

export function requestPosts() {
  return {
    type: actions.GET_POSTS_REQUEST,
    isFetching: true,
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch("http://localhost:5000/blog")
      .then(response => response.json())
      .then(posts => dispatch(getPosts(posts)))
      .catch((err) => dispatch(failedToGetPosts(err)))
  }
}
