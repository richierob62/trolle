import produce from 'immer'

import { RECEIVE_CARDS } from '../actions/card_actions'

const cardsReducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_CARDS:
        return action.cards
    }
  })

export default cardsReducer
