import React from 'react'
import { Layout } from 'antd'

const WorkimeLayout = ({ children }) => {
  const { Content, Sider } = Layout

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed></Sider>

      <Layout>
        <Content style={{ padding: '16px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default WorkimeLayout
