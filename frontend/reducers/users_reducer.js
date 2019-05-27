import produce from 'immer'

import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  STAR_BOARD,
  UNSTAR_BOARD
} from '../actions/board_actions'

let starred_boards, user_recents, idx

const usersReducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        draft[action.currentUser.id] = action.currentUser
        break

      case RECEIVE_BOARDS:
        draft[action.currentUserId].recent_boards = action.recent_boards
        break

      case RECEIVE_BOARD:
        user_recents = draft[action.currentUserId].recent_boards
        if (user_recents.indexOf(action.board.id) === -1)
          user_recents.unshift(action.board.id)
        draft[action.currentUserId].recent_boards = user_recents.slice(0, 4)
        break

      case STAR_BOARD:
        starred_boards = draft[action.currentUserId].starred_boards
        if (starred_boards.indexOf(action.board.id) === -1)
          starred_boards.push(action.board.id)
        break

      case UNSTAR_BOARD:
        starred_boards = draft[action.currentUserId].starred_boards
        idx = starred_boards.indexOf(action.board.id)
        if (idx !== -1) starred_boards = starred_boards.splice(idx, 1)
        break
    }
  })

export default usersReducer
