import actions from "../actions"
import {createReducer} from './createReducer'

export const pages = createReducer({ 
  REQUEST: actions.PAGE_REQUEST,
  SUCCESS: actions.PAGE_SUCCESS,
  ERROR: actions.PAGE_ERROR,
})
