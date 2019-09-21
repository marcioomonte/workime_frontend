import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Typography } from 'antd'

import Login from './components/Login'

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const PageNotFound = React.lazy(() => import('./components/UI/PageNotFound'))
const User = React.lazy(() => import('./components/User'))

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<Typography.Title>Loading...</Typography.Title>}>
        <Route exact component={Login} path="/" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={User} path="/user" />
        <Route component={PageNotFound} />
      </React.Suspense>
    </Router>
  )
}

export default App
