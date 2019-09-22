import React from 'react';
import { Layout } from 'antd';

import WorkimeSidebar from '../Sidebar';

const WorkimeLayout = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <WorkimeSidebar />

      <Layout>
        <Content style={{ padding: '16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default WorkimeLayout;
