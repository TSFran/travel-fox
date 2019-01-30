import { createGlobalStyle } from 'styled-components';

const styledDefault = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${styledDefault}
`;
