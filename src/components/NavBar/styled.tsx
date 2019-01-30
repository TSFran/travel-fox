import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavBarOverlay = styled.div`
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  opacity: 1;
  z-index: 100;
  position: fixed;
  animation: show 0.5s ease;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const NavBarWrapper = styled.nav`
  background: #f2f2f2;
  margin-left: 0;
  transition: all 0.4s ease-in-out;
`;

export const NavBarLogo = styled.div`
  width: 150px;
  height: 30px;
  background: #efefef;
`;

export const NavBarIcon = styled.div`
  width: 35px;
  height: 35px;
  background: #efefef;
`

export const NavBarNav = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavBarItem = styled.li`
  list-style: none;
  font-size: 18px;
  font-family: Arial;
`;

export const NavBarLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  padding: 12px 30px;
  border: solid #ccc;
  border-width: 0 0 1px 0;
  cursor: pointer;
`;