import produce from 'immer'

import { RECEIVE_BOARD, RECEIVE_BOARDS } from '../actions/board_actions'

let newState

const boardsReducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_BOARDS:
        return action.boards

      case RECEIVE_BOARD:
        draft[action.board.id] = action.board
        break
    }
  })

export default boardsReducer
