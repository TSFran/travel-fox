import * as React from 'react';
import { HeaderWrapper, HeaderIcon, HeaderNav, HeaderItem, HeaderLink } from './styled';

export interface IHeaderProps {
  link: string
}

export default class Header extends React.Component<IHeaderProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { link } = this.props;
    return (
      <HeaderWrapper>
        <HeaderIcon></HeaderIcon>
        <HeaderNav>
          <HeaderItem>
            <HeaderLink href={link} target='_blank'>Google</HeaderLink>
          </HeaderItem>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}