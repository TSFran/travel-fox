import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from '@app/src/components/Header';
import { headerProperties } from '@app/src/dataInitial/Header';

export const App: React.SFC<any> = (props) => {
  const { route } = props;
  return (
    <React.Fragment>
      <Header link={'https://www.youtube.com'}/>
      { renderRoutes(route.routes) }
    </React.Fragment>
  );
}
