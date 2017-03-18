import {host, port} from "server"

export function post(fetch, actions) {
  const actionCreators = {
    getPost(post) {
      return {
        type: actions.GET_POST_SUCCESS,
        post,
        isFetching: false,
      }
    },

    failedToGetPost() {
      return {
        type: actions.GET_POST_ERROR,
        isFetching: false,
      }
    },

    requestPost() {
      return {
        type: actions.GET_POST_REQUEST,
        isFetching: true,
      }
    },

    fetchPost(uid) {
      return dispatch => {
        dispatch(actionCreators.requestPost())
        return fetch(`http://${host}:${port}/posts/${uid}`)
          .then(response => response.json())
          .then(posts => dispatch(actionCreators.getPost(posts)))
          .catch((err) => dispatch(actionCreators.failedToGetPost(err)))
      }
    },
  }

  return actionCreators
}
