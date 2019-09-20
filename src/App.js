import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <Router>
      <Route component={Dashboard} path="/dashboard" />
    </Router>
  )
}

export default App
