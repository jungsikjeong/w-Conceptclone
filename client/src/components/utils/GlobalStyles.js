import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing: border-box;

    }
    html{
        font-size:20px;
        width: 100%;
    }
    
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:1rem;
        background-color:#fff;
        color:white;
        overflow-x: hidden;
        /* height: 1000vh;         */
    }

`;

export default GlobalStyles;
