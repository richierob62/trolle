import produce from 'immer'

import { RECEIVE_TEAMS } from '../actions/team_actions'

const teamsReducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_TEAMS:
        return action.teams
    }
  })

export default teamsReducer
