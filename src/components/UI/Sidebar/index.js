import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';

const Sidebar = () => {
    const { Sider } = Layout;

    return (
        <Sider collapsed>
            <Menu theme="dark">
                <Menu.Item key="1">
                    <Link to="/dashboard">
                        <Icon type="pie-chart" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/user">
                        <Icon type="user" />
                        <span>User</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
