import React from 'react'
import { connect } from 'react-redux'
import Logo from './svg_images/logo.jsx'
import { Link } from 'react-router-dom'
import { logout } from '../actions/session_actions'

const mstp = state => ({
  isLoggedIn: !!state.session.id
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

const nav = ({ isLoggedIn, logout }) => (
  <div className="navbar">
    <Logo />
    {isLoggedIn ? (
      <div className="logged_in_btns">
        <button onClick={logout}>Sign Out</button>
      </div>
    ) : (
      <div className="logged_out_btns">
        <Link className="login btn btn-sm btn-link" to="/login">
          Log In
        </Link>
        <Link className="signup btn btn-sm btn-link" to="/signup">
          Sign Up
        </Link>
      </div>
    )}
  </div>
)

export default connect(
  mstp,
  mdtp
)(nav)
