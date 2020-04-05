import { createGlobalStyle } from 'styled-components/macro'
import theme from './theme'
import FontFaces from './fonts'
const { colors } = theme

const GlobalStyle = createGlobalStyle`
  ${FontFaces}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.black};
  }

  h1 {
    font-family: Montserrat;  
    font-weight: 900;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: ${theme.transition};
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }

    &::placeholder {
    }

    &:focus,
    &:active {

      &::placeholder {
        opacity: 0.5;
      }
    }
  }
`

export default GlobalStyle
