import { TOGGLE_BOARDS_MENU, TOGGLE_PROFILE_MENU } from '../actions/ui_actions'

const navReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case TOGGLE_BOARDS_MENU:
      return Object.assign({}, state, { boards_menu: !state.boards_menu })

    case TOGGLE_PROFILE_MENU:
      return Object.assign({}, state, { profile_menu: !state.profile_menu })

    default:
      return state
  }
}

export default navReducer
