import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(({ history }) => (
  <div className="home-btn-bg" onClick={() => history.push('/')}>
    <div className="home-btn-icon" />
  </div>
))
