import React from 'react'
import { connect } from 'react-redux'
import Logo from './svg_images/logo.jsx'
import { Link } from 'react-router-dom'
import HomeButton from './home_button'
import BoardsMenuButton from './boards_menu_button'
import SearchBar from './searchbar'
import CreateMenuButton from './create_menu_button'
import ProfileMenuButton from './profile_menu_button'

const mstp = state => ({
  isLoggedIn: !!state.session.id
})

const nav = ({ isLoggedIn, logout }) => {
  if (isLoggedIn)
    return (
      <div className="navbar navbar-loggedin">
        <HomeButton />
        <BoardsMenuButton />
        <SearchBar />
        <Link to="/">
          <Logo />
        </Link>
        <CreateMenuButton />
        <ProfileMenuButton />
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

export default connect(mstp)(nav)
