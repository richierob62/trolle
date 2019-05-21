import React from 'react'
import { connect } from 'react-redux'
import Logo from './logo.jsx'
import { Link } from 'react-router-dom'

const mstp = state => ({
  is_logged_in: !!state.session.id
})

const nav = ({ is_logged_in }) => (
  <div className="navbar">
    <Logo />
    {is_logged_in ? (
      <div className="logged_in_btns">Logged In Stuff</div>
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

export default connect(mstp)(nav)
