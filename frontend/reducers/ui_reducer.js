import { combineReducers } from 'redux'
import navReducer from './nav_reducer'

export default combineReducers({
  nav: navReducer
})
