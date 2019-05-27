// @ts-nocheck
import { merge } from 'lodash'

import {
  TOGGLE_BOARDS_MENU,
  TOGGLE_PROFILE_MENU,
  TOGGLE_SEARCH_RESULTS_LIST,
  SET_SELECTED_HOME_MENU_ITEM
} from '../actions/ui_actions'

const navReducer = (state = {}, action) => {
  const draft = merge({}, state)

  switch (action.type) {
    case TOGGLE_BOARDS_MENU:
      draft.boards_menu = !draft.boards_menu
      return draft

    case TOGGLE_PROFILE_MENU:
      draft.profile_menu = !draft.profile_menu
      return draft

    case TOGGLE_SEARCH_RESULTS_LIST:
      draft.search_results_list = !draft.search_results_list
      return draft

    case SET_SELECTED_HOME_MENU_ITEM:
      draft.home_menu = action.selection
      return draft

    default:
      return state
  }
}

export default navReducer
