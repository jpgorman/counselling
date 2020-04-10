import {host, port} from "server"

export function page(fetch, {SUCCESS, ERROR, REQUEST}) {
  const actionCreators = {
    dispatch(data) {
      return {
        type: SUCCESS,
        data,
        isFetching: false,
      }
    },

    failed() {
      return {
        type: ERROR,
        isFetching: false,
      }
    },

    request() {
      return {
        type: REQUEST,
        isFetching: true,
      }
    },

    fetchData(uid) {
      return dispatch => {
        dispatch(actionCreators.request())
        return fetch(`http://${host}:${port}/page/${uid}`)
          .then(response => response.json())
          .then(data => dispatch(actionCreators.dispatch(data)))
          .catch((err) => dispatch(actionCreators.failed(err)))
      }
    },
  }

  return actionCreators
}
