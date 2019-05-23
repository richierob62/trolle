import merge from 'lodash/merge'

import { RECEIVE_TEAMS } from '../actions/team_actions'

const teamsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_TEAMS:
      return action.teams
    default:
      return state
  }
}

export default teamsReducer
