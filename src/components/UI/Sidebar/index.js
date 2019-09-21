import React from 'react'
import { Icon, Layout, Menu } from 'antd'

const Sidebar = () => {
  const { Sider } = Layout

  return (
    <Sider collapsed>
      <Menu theme="dark">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Dashboard</span>
        </Menu.Item>

        <Menu.Item key="2">
          <Icon type="user" />
          <span>User</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
