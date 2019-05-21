import React from 'react'
import HomeOrSplash from './home_or_spash_page'
import LoginForm from './login_form'
import SignupForm from './signup_form'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeOrSplash} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
    </Switch>
  </div>
)

export default App
