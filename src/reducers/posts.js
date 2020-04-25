import actions from "../actions"
import {createReducer} from './createReducer'

export const posts = createReducer({ 
  REQUEST: actions.GET_POSTS_REQUEST,
  SUCCESS: actions.GET_POSTS_SUCCESS,
  ERROR: actions.GET_POSTS_ERROR,
})
