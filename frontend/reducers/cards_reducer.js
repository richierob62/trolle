import { merge } from 'lodash'

import { RECEIVE_CARDS } from '../actions/card_actions'

export default (state = {}, action) => {
  const draft = merge({}, state)

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards || {}
    default:
      return state
  }
}
