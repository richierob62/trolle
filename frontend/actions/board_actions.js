import * as APIUtil from '../util/board_api_util'

export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
export const RECEIVE_VALIDATION_ERRORS = 'RECEIVE_VALIDATION_ERRORS'
export const CLEAR_VALIDATION_ERRORS = 'CLEAR_VALIDATION_ERRORS'

export const createBoard = board => dispatch =>
  APIUtil.createBoard(board).then(
    board => {
      dispatch({
        type: RECEIVE_BOARD,
        board
      })
      return board
    },
    errors =>
      dispatch({
        type: RECEIVE_VALIDATION_ERRORS,
        errors
      })
  )

export const clearValidationErrors = () => ({
  type: CLEAR_VALIDATION_ERRORS
})

export const getBoards = () => (dispatch, getState) => {
  const currentUserId = getState().session.id
  return APIUtil.getBoards().then(
    ({ boards, recent_boards }) => {
      dispatch({
        type: RECEIVE_BOARDS,
        boards,
        recent_boards,
        currentUserId
      })
      return boards
    },
    errors =>
      dispatch({
        type: RECEIVE_VALIDATION_ERRORS,
        errors
      })
  )
}
