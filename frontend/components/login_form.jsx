import { connect } from 'react-redux'
import { login, clearSessionErrors } from '../actions/session_actions'
import LoginSignupForm from './login_signup_form'

const mstp = state => ({
  session_errors: state.errors.session,
  formType: 'login'
})

const mdtp = dispatch => ({
  action: newUser => dispatch(login(newUser)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(
  mstp,
  mdtp
)(LoginSignupForm)
