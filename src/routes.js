import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Configuration from './components/configuration';
import Home from './pages/home';
import ImageDetails from './pages/image-details';

const App = ({ route, children }) => (
  <Configuration>
    {renderRoutes(route.routes)}
    {children}
  </Configuration>
);

App.propTypes = {
  route: PropTypes.object,
  children: PropTypes.object,
};

const routes = [
  {
    path: '/',
    component: withRouter(App),
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/image-details',
        exact: true,
        component: ImageDetails,
      },
    ],
  },
];

export { routes };
