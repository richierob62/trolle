import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mstp = state => ({})

const mdtp = dispatch => ({})

class Login extends React.Component {
  render() {
    return (
      <div className="login-form">
        <div className="contents-wrapper">
          <h1>Log in to Trolle</h1>
          <Link className="create-link" to="/signup">or create an account</Link>
          <form>
            <label>
              Email <span>(or username)</span>
              <input type="text" placeholder="e.g., harry@gcloud.ai" />
            </label>
            <label>
              Password
              <input type="password" />
            </label>

            <button>Log In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(Login)
