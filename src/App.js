import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import User from './components/User'

const App = () => {
  return (
    <Router>
      <Route exact component={Login} path="/" />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={User} path="/user" />
    </Router>
  )
}

export default App
