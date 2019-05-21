import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mstp = state => ({})

const mdtp = dispatch => ({})

class SignUp extends React.Component {
  render() {
    return (
      <div className="login-form">
        <div className="contents-wrapper">
          <h1>Create a Trolle Account</h1>
          <Link className="create-link" to="/login">
            or sign in to your account
          </Link>
          <form>
            <fieldset>
              <label>Name</label>
              <input type="text" placeholder="e.g., Harry Houdini" />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input type="text" placeholder="e.g., harry@gcloud.ai" />
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input type="password" />
            </fieldset>

            <button>Create New Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(SignUp)
