import * as React from 'react';

import { App } from '@app/src/views/App';
import { Home } from '@app/src/views/Home';
import { Drivers } from '@app/src/views/Drivers';

const pathBase = process.env.PATH_BASE;

const NotFound: React.SFC<{}> = () => (
  <div>Página no encontrada</div>
);

export const Routes = [
  {
    component: App,
    routes: [
      {
        path: `${pathBase}/`,
        component: Home,
        exact: true,
      },
      {
        path: `${pathBase}/conductores`,
        component: Drivers,
        exact: true
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]