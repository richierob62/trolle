import React from 'react'
import { connect } from 'react-redux'
import Logo from './svg_images/logo.jsx'
import { Link } from 'react-router-dom'
import { logout } from '../actions/session_actions'
import HomeButton from './home_button'
import BoardsMenuButton from './boards_menu_button'
import SearchBar from './searchbar'
import CreateMenuButton from './create_menu_button'
import LoggedInUserMenuButton from './logged_in_user_menu_button'

const mstp = state => ({
  isLoggedIn: !!state.session.id
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

const nav = ({ isLoggedIn, logout }) => {
  if (isLoggedIn)
    return (
      <div className="navbar navbar-loggedin">
        <HomeButton />
        <BoardsMenuButton />
        <SearchBar />
        <Logo />
        <CreateMenuButton />
        <LoggedInUserMenuButton />

        <button onClick={logout}>Sign Out</button>
      </div>
    )

  return (
    <div className="navbar">
      <Logo />
      <div className="logged_out_btns">
        <Link className="login btn btn-sm btn-link" to="/login">
          Log In
        </Link>
        <Link className="signup btn btn-sm btn-link" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default connect(
  mstp,
  mdtp
)(nav)
