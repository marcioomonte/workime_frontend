import React from 'react'
import { Layout, Typography } from 'antd'

const { Content, Sider } = Layout

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed></Sider>

      <Layout>
        <Content style={{ padding: '16px' }}>
          <Typography.Title type="primary">Workime app</Typography.Title>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
