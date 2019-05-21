import React from 'react'
import { connect } from 'react-redux'
import HomePage from './home_page'
import SplashPage from './splash_page'
import Navbar from './navbar'

const mstp = state => ({
  is_logged_in: !!state.session.id
})

const hs = ({ is_logged_in }) => (
  <div>
    <Navbar />
    <div className="main">{is_logged_in ? <HomePage /> : <SplashPage />}</div>
  </div>
)

export default connect(mstp)(hs)
