import * as React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import ConfigureStore from '@app/src/store/configureStore';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from '@app/config/routes';

import { GlobalStyle } from '@app/config/globalStyle';

import { fetchUsers } from '@app/src/state/User/actions'

const store = ConfigureStore();
store.dispatch(fetchUsers());

render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      {renderRoutes(Routes)}
    </Router>
  </Provider>, 
  document.getElementById('root')
);