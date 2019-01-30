import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import NavBar from '@app/src/components/NavBar';
import Header from '@app/src/containers/HeaderContainer';
import { headerProperties } from '@app/src/dataInitial/Header';

export const App: React.SFC<any> = (props) => {
  const { route } = props;
  return (
    <React.Fragment>
      <Header/>
      { renderRoutes(route.routes) }
    </React.Fragment>
  );
}
