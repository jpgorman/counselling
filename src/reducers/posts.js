import actions from "../actions"

export function posts(state = {
  isFetching: false,
  entities: []
}, action) {
  switch (action.type) {

  case actions.GET_POSTS_REQUEST:
    return {
      isFetching: true,
      entities: state.entities,
    }
  case actions.GET_POSTS_SUCCESS:
    return {
      isFetching: false,
      entities: action.posts,
    }
  case actions.GET_POSTS_ERROR:
    return {
      isFetching: false,
      entities: state.entities,
    }
  default:
    return state
  }
}
