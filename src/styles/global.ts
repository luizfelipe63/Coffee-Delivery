import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme.color.yellow};
  }

  body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

  }


  body{
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color['base-text']};
  }
`
