import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'
import produce from 'immer'

const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (state = _nullUser, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        draft.id = action.currentUser.id
        break

      case LOGOUT_CURRENT_USER:
        return _nullUser
    }
  })

export default sessionReducer
