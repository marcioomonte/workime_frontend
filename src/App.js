import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'

const { Content, Sider } = Layout

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed></Sider>

      <Layout>
        <Content style={{ padding: '16px' }}>

          <Router>
            <Route component={Dashboard} path="/dashboard" />
          </Router>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
