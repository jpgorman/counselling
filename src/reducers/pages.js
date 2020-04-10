import actions from "../actions"

export function pages(state = {
  isFetching: false,
  entities: []
}, action) {
  switch (action.type) {
  case actions.PAGE_REQUEST:
    return {
      error: false,
      isFetching: true,
      entities: state.entities,
    }
  case actions.PAGE_SUCCESS:
    return {
      error: false,
      isFetching: false,
      entities: state.entities.concat(action.data),
    }
  case actions.PAGE_ERROR:
    return {
      error: true,
      isFetching: false,
      entities: state.entities,
    }
  
  default:
    return state
  }
}
