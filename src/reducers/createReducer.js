const createTypeMap = ({REQUEST, SUCCESS, ERROR}) => (state, action) => ({
  [REQUEST]: {
    error: false,
    isFetching: true,
    entities: state.entities,
  },
  [SUCCESS]: {
    error: false,
    isFetching: false,
    entities: state.entities.concat(action.data),
  },
  [ERROR]: {
    error: true,
    isFetching: false,
    entities: state.entities,
  }
})


export const createReducer = ({
  REQUEST,
  SUCCESS,
  ERROR
}) => (state = {
  isFetching: false,
  entities: []
}, action) => {

  const typeMap = createTypeMap({
    REQUEST,
    SUCCESS,
    ERROR,
  })(state, action)

  if(typeMap.hasOwnProperty(action.type))
    return typeMap[action.type]
  return state
}
