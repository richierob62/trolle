import { merge } from 'lodash'

import { RECEIVE_TEAMS } from '../actions/team_actions'

const teamsReducer = (state = {}, action) => {
  const draft = merge({}, state)

  switch (action.type) {
    case RECEIVE_TEAMS:
      return action.teams
    default:
      return state
  }
}

export default teamsReducer
