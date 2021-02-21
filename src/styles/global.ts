import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
  
  @media (max-width: 1500px) {
    :root {
      font-size: 9px;
    }
  }

  @media (max-width: 800px) {
    :root {
      font-size: 11px;
    }
  }
`
