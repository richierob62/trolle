import * as ApiUtils from '../util/board_api_util'

export const RECEIVE_MATCHING_USERS = 'RECEIVE_MATCHING_USERS'
export const UPDATE_MEMBERSHIP = 'UPDATE_MEMBERSHIP'

export const getMatchingUsers = (matching_string, board_id) => (
  dispatch,
) => {
  return ApiUtils.getMatchingUsers(matching_string, board_id).then(({users}) =>
    dispatch({
      type: RECEIVE_MATCHING_USERS,
      users
    })
  )
}

export const inviteUsers = (user_ids, board_id) => (dispatch, getState) =>
  ApiUtils.inviteUsers(user_ids, board_id).then(users => {
    dispatch({
      type: UPDATE_MEMBERSHIP,
      user_ids,
      board_id
    })
    return users
  })
