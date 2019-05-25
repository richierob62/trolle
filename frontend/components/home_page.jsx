import React from 'react'
import HomeMenu from './home_menu'
import { Route } from 'react-router-dom'
import Boards from './boards'

export default props => {
  return (
    <div className="home-container">
      <HomeMenu />
      <div className="home-content">
        <Route path="/boards" component={Boards} />
      </div>
    </div>
  )
}
