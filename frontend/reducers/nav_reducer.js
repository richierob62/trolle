import { TOGGLE_BOARDS_MENU } from '../actions/ui_actions'

const navReducer = (state = { boards_menu: false }, action) => {
  Object.freeze(state)
  switch (action.type) {
    case TOGGLE_BOARDS_MENU:
      return Object.assign({}, state, { boards_menu: !state.boards_menu })

    default:
      return state
  }
}

export default navReducer
