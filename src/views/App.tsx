import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import { HeaderContainer } from '@app/src/containers/HeaderContainer';

export const App: React.SFC<any> = (props) => {
  const { route } = props;
  return (
    <React.Fragment>
      <HeaderContainer/>
      { renderRoutes(route.routes) }
    </React.Fragment>
  );
}
