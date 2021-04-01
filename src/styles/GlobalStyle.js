import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({theme}) => theme.fonts.default.family};
    margin: 0;
    padding: 0;
  }
  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;