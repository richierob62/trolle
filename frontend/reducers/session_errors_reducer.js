import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions'
import produce from 'immer'

export default (state = [], action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors
      case RECEIVE_CURRENT_USER:
        return []
      case CLEAR_SESSION_ERRORS:
        return []
    }
  })
