import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  NavBarOverlay,
  NavBarWrapper,
  NavBarNav,
  NavBarItem,
  NavBarLink
} from './styled';

export interface INavBarProps {
  showNavBar: boolean;
  hideNavBar: Function;
}

interface INavBarState {
  showNavBar: boolean;
}

export default class NavBar extends React.Component<INavBarProps, INavBarState> {
  constructor(props: INavBarProps) {
    super(props);
    const { showNavBar } = this.props;
    this.state = {
      showNavBar,
    }
  }

  static defaultProps = {
    showNavBar: false,
  }

  static propTypes = {
    showNavBar: PropTypes.bool,
    hideNavBar: PropTypes.func,
  }

  handleHideNavBar = (e) => {
    const { hideNavBar } = this.props;

    if(e.currentTarget === e.target) {
      this.setState({
        showNavBar: false,
      })
    }
    hideNavBar();
  }

  render() {
    const { showNavBar } = this.props;
    return (
        <React.Fragment>
          {showNavBar && 
            (<NavBarOverlay onClick={this.handleHideNavBar}>
              <NavBarWrapper visible={showNavBar}>
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
              </NavBarWrapper>
            </NavBarOverlay>)
          }
        </React.Fragment>
    );
  }
}