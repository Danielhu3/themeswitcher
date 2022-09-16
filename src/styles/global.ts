import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
  font-size: 62.5%;
    }

    body{
        background: ${props => props.theme.colors.background};
        font-size: 1.4rem;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }

    
`