import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
      <Route exact component={Login} path="/" />
      <Route component={Dashboard} path="/dashboard" />
    </Router>
  )
}

export default App
