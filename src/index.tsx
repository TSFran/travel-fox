import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from '@app/config/routes';

import { GlobalStyle } from '@app/config/globalStyle';

render(
  <React.Fragment>
    <GlobalStyle />
    <Router>
      {renderRoutes(Routes)}
    </Router>
  </React.Fragment>, 
  document.getElementById('root')
);