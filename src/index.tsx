import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from '@app/config/routes';

render(
  <Router>
    { renderRoutes(Routes) }
  </Router>, 
  document.getElementById('root')
);