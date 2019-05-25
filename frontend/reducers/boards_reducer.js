import merge from 'lodash/merge'

import { RECEIVE_BOARD, RECEIVE_BOARDS } from '../actions/board_actions'

let newState

const boardsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards

    case RECEIVE_BOARD:
      newState = merge({}, state)
      newState[action.board.id] = action.board
      return newState
    default:
      return state
  }
}

export default boardsReducer
