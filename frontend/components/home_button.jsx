import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(({ history }) => (
  <div className="icon" onClick={() => history.push('/')}>
    <div className="icon-home" />
  </div>
))
