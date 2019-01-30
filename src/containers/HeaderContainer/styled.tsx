import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: black;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background: white;

  div {
    width: 120px;
    height: 40px;
    background: #c4c4c4;
    margin: 5px 0;
  }
`;

export const HeaderIconButton = styled.div`
  width: 35px;
  height: 35px;
  background: #404040;
  margin: 5px;
`;

export const HeaderProfile = styled.div`
  font-family: Arial;
  color: white;
  margin: 5px;
`;