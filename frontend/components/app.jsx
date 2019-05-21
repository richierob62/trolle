import React from 'react'
import HomeOrSplash from './home_or_spash_page'
import LoginForm from './login_form'
import SignupForm from './signup_form'
import { Route, Switch } from 'react-router-dom'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeOrSplash} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </Switch>
  </div>
)

export default App
