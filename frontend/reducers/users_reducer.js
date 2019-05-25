import merge from 'lodash/merge'

import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_BOARDS } from '../actions/board_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser })

    case RECEIVE_BOARDS:
      const updatedUser = merge({}, state[action.currentUserId])
      updatedUser.recent_boards = action.recent_boards
      return merge({}, state, {
        [updatedUser.id]: updatedUser
      })

    default:
      return state
  }
}

export default usersReducer
