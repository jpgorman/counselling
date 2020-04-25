export function hydrate(store) { 
  return ({predicate, action}) => (nextState, replace, callback) => {

    if (predicate(store.getState(), nextState)){
      store.dispatch(action(nextState))
    }

    callback()

  }
}
