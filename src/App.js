import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';
import rootReducer from './reducers';

const middlewares = [thunk];

const composeEnhancers = typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        && process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

const App = () => (
  <Provider store={store}>
    <Router>
      { renderRoutes(routes) }
    </Router>
  </Provider>
);

export default App;
