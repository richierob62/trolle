import * as APIUtil from '../util/board_api_util'

export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
export const UNSTAR_BOARD = 'UNSTAR_BOARD'
export const STAR_BOARD = 'STAR_BOARD'
export const RECEIVE_VALIDATION_ERRORS = 'RECEIVE_VALIDATION_ERRORS'
export const CLEAR_VALIDATION_ERRORS = 'CLEAR_VALIDATION_ERRORS'

export const createBoard = (board, team_id) => (dispatch, getState) => {
  const currentUserId = getState().session.id
  return APIUtil.createBoard(board, team_id).then(
    board => {
      dispatch({
        type: RECEIVE_BOARD,
        board,
        currentUserId
      })
      return board
    },
    errors =>
      dispatch({
        type: RECEIVE_VALIDATION_ERRORS,
        errors
      })
  )
}

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

export const starBoard = id => (dispatch, getState) => {
  const currentUserId = getState().session.id
  return APIUtil.starBoard(id).then(
    board => {
      dispatch({
        type: RECEIVE_BOARD,
        board,
        currentUserId
      })
      dispatch({
        type: STAR_BOARD,
        board,
        currentUserId
      })
      return board
    },
    errors =>
      dispatch({
        type: RECEIVE_VALIDATION_ERRORS,
        errors
      })
  )
}

export const unStarBoard = id => (dispatch, getState) => {
  const currentUserId = getState().session.id
  return APIUtil.unStarBoard(id).then(
    board => {
      dispatch({
        type: RECEIVE_BOARD,
        board,
        currentUserId
      })
      dispatch({
        type: UNSTAR_BOARD,
        board,
        currentUserId
      })
      return board
    },
    errors =>
      dispatch({
        type: RECEIVE_VALIDATION_ERRORS,
        errors
      })
  )
}

export const addBoardToRecent = id => (dispatch, getState) => {
  const currentUserId = getState().session.id
  return APIUtil.addBoardToRecent(id).then(
    board => {
      dispatch({
        type: RECEIVE_BOARD,
        board,
        currentUserId
      })
      return board
    },
    errors =>
      dispatch({
        type: RECEIVE_VALIDATION_ERRORS,
        errors
      })
  )
}