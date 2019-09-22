import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Typography } from 'antd';
import GlobalStyles from './styles/global';

import Login from './components/Login';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const PageNotFound = React.lazy(() => import('./components/UI/PageNotFound'));
const User = React.lazy(() => import('./components/User'));

const { Title } = Typography;
const App = () => {
  return (
    <>
      <Router>
        <React.Suspense fallback={<Title>Loading...</Title>}>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
          <Route path="/error" component={PageNotFound} />
        </React.Suspense>
      </Router>
      <GlobalStyles />
    </>
  );
};

export default App;
