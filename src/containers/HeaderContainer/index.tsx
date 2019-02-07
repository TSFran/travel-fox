import * as React from 'react';
import * as PropTypes from 'prop-types';

import { connect } from 'react-redux';

// import NavBar from '@app/src/components/NavBar';
import { NavBar } from '@app/src/components/NavBar2';

import {
  HeaderLogo,
  HeaderWrapper,
  HeaderIconButton,
  HeaderProfile
} from './styled';

interface IHeaderState {
  show: boolean,
}

class Header extends React.Component<any, IHeaderState> {
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
    const { name, isFetching } = this.props;
    console.log(name);
    return (
      <React.Fragment>
        {isFetching ? 
          (
            <div>Cargando...</div>
          ) : 
          (
            <HeaderWrapper>
              <HeaderLogo>
                <div></div>
              </HeaderLogo>
              {/* <HeaderIconButton onClick={this.changeClick} /> */}
              {/* <NavBar
                showNavBar={this.state.show}
                hideNavBar={this.hideNavBar}
              /> */}
              <NavBar />
              <HeaderProfile>
                <span>{name}</span>
              </HeaderProfile>
          </HeaderWrapper>
          )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.users.isFetching,
  name: state.users.items[0].name
});

export const HeaderContainer = connect(mapStateToProps, null)(Header);