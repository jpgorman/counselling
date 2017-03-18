import {host, port} from "server"
console.log(`http://${host}:${port}/posts`)
export function posts(fetch, actions) {
  const actionCreators = {
    getPosts(posts) {
      return {
        type: actions.GET_POSTS_SUCCESS,
        posts,
        isFetching: false,
      }
    },

    failedToGetPosts() {
      return {
        type: actions.GET_POSTS_ERROR,
        isFetching: false,
      }
    },

    requestPosts() {
      return {
        type: actions.GET_POSTS_REQUEST,
        isFetching: true,
      }
    },

    fetchPosts() {
      return dispatch => {
        dispatch(actionCreators.requestPosts())
        return fetch(`http://${host}:${port}/posts`)
          .then(response => response.json())
          .then(posts => dispatch(actionCreators.getPosts(posts)))
          .catch((err) => dispatch(actionCreators.failedToGetPosts(err)))
      }
    },
  }

  return actionCreators
}
