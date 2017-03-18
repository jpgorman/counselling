import actions from "../actions"



export function posts(state = {
  isFetching: false,
  entities: []
}, action) {
  switch (action.type) {
  case actions.GET_POST_REQUEST:
    return {
      error: false,
      isFetching: true,
      entities: state.entities,
    }
  case actions.GET_POST_SUCCESS:
    return {
      error: false,
      isFetching: false,
      entities: state.entities.concat(action.post),
    }
  case actions.GET_POST_ERROR:
    return {
      error: true,
      isFetching: false,
      entities: state.entities,
    }
  case actions.GET_POSTS_REQUEST:
    return {
      error: false,
      isFetching: true,
      entities: state.entities,
    }
  case actions.GET_POSTS_SUCCESS:
    return {
      error: false,
      isFetching: false,
      entities: action.posts,
    }
  case actions.GET_POSTS_ERROR:
    return {
      error: true,
      isFetching: false,
      entities: state.entities,
    }
  default:
    return state
  }
}
