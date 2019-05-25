import * as ApiUtils from '../util/team_api_util'

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'

export const getTeams = () => (dispatch, getState) =>
  ApiUtils.getTeams().then(teams =>
    dispatch({
      type: RECEIVE_TEAMS,
      teams
    })
  )
