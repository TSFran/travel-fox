import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.div``;

export const NavBarContent = styled.nav`
  position: absolute;
  height: 100%;
  top: 50px;
  background: #f2f2f2;
  margin-left: -294px;
  transition: all 0.4s ease-in-out;
  z-index: 400;
`;

export const NavBarOverlay = styled.label.attrs({htmlFor: 'chk_nav-hide'})`
  display: none;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 100;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const NavBarCheckHide = styled.input.attrs({
  id: 'chk_nav-hide',
  type: 'radio',
  name: 'test'})`
  display: none;
  &:checked ~ ${NavBarContent} {
    margin-left: -294px;
  }

  &:checked ~ ${NavBarOverlay} {
    display: none;
  }
`;

export const NavBarCheckShow = styled.input.attrs({
  id: 'chk_nav-show',
  type: 'radio',
  name: 'test'})`
  display: none;
  &:checked ~ ${NavBarContent} {
    margin-left: 0;
  }

  &:checked ~ ${NavBarOverlay} {
    display: flex;
  }
`;

export const NavBarIcon = styled.label.attrs({htmlFor: 'chk_nav-show'})`
  display: block;
  width: 35px;
  height: 35px;
  background: #efefef;
  margin: 5px;
`;

export const NavBarNav = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavBarItem = styled.li`
  list-style: none;
  font-size: 14px;
  font-family: Arial;
`;

export const NavBarLink = styled(Link)`
  display: flex;
  width: 240px;
  color: black;
  text-decoration: none;
  padding: 12px 20px;
  border: solid #ccc;
  border-width: 0 0 1px 0;
  cursor: pointer;
`;