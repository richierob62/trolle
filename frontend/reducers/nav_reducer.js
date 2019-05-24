import {
  TOGGLE_BOARDS_MENU,
  TOGGLE_PROFILE_MENU,
  TOGGLE_SEARCH_RESULTS_LIST,
  SET_SELECTED_HOME_MENU_ITEM
} from '../actions/ui_actions'

const navReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case TOGGLE_BOARDS_MENU:
      return Object.assign({}, state, { boards_menu: !state.boards_menu })

    case TOGGLE_PROFILE_MENU:
      return Object.assign({}, state, { profile_menu: !state.profile_menu })

    case TOGGLE_SEARCH_RESULTS_LIST:
      return Object.assign({}, state, {
        search_results_list: !state.search_results_list
      })

    case SET_SELECTED_HOME_MENU_ITEM:
      return Object.assign({}, state, {
        home_menu: action.selection
      })

    default:
      return state
  }
}

export default navReducer
