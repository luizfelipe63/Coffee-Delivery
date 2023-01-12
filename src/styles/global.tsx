import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: transparent;
  }

  
  body,input,textarea,button,select,option{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

  }

  body{
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color['base-text']};
  }

  
  @media (max-width: 768px){
    html{
      font-size: 87.5%;
    }
  }
`
