import { connect } from 'react-redux'
import { signup, clearSessionErrors } from '../actions/session_actions'
import LoginSignupForm from './login_signup_form'

const mstp = state => ({
  session_errors: state.errors.session,
  formType: 'signup'
})

const mdtp = dispatch => ({
  action: newUser => dispatch(signup(newUser)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(
  mstp,
  mdtp
)(LoginSignupForm)
