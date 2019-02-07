import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  NavBarWrapper,
  NavBarNav,
  NavBarItem,
  NavBarLink,
  NavBarCheckShow,
  NavBarCheckHide,
  NavBarContent,
  NavBarIcon,
  NavBarOverlay
} from './styled';

export interface INavBarProps {
  className?: string;
}

export const NavBar: React.SFC<INavBarProps> = ({ className }) => (
  <NavBarWrapper>
    <NavBarIcon />
    <NavBarCheckShow />
    <NavBarContent className={className}>
      <NavBarNav>
        <NavBarItem>
          <NavBarLink to="/reservas">Reservas</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to="/destinos">Destinos</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to="/conductores">Conductores</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to="/contacto">Contacto</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to="/">INICIO</NavBarLink>
        </NavBarItem>
      </NavBarNav>    
    </NavBarContent>
    <NavBarCheckHide />
    <NavBarOverlay />
  </NavBarWrapper>
);

NavBar.propTypes = {
  className: PropTypes.string
}
