import { combineReducers } from 'redux'

import users from './users_reducer'
import cards from './cards_reducer'

export default combineReducers({
  users,
  cards
})
