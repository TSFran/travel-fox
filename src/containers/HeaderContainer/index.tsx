import * as React from 'react';
import * as PropTypes from 'prop-types';

import NavBar from '@app/src/components/NavBar';
import {
  HeaderLogo,
  HeaderWrapper,
  HeaderIconButton,
  HeaderProfile
} from './styled';

interface IHeaderState {
  show: boolean,
}

export default class Header extends React.Component<any, IHeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  changeClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  hideNavBar = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderLogo>
          <div></div>
        </HeaderLogo>
        <HeaderIconButton onClick={this.changeClick} />
        <NavBar 
          showNavBar={this.state.show}
          hideNavBar={this.hideNavBar}
          />
        <HeaderProfile>
          <span>Luis Tupa</span>
        </HeaderProfile>
      </HeaderWrapper>
    );
  }
}