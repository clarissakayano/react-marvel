import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

    html, body, #root{
    font-family: 'Roboto Condensed', sans-serif;
    min-height: 100vh;


    #root{
   }
}


   main {
    min-height: 100vh;
   }
//bootstrap overrides
.card {
    background-color:black;
    color: white;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    overflow: hidden;
    display: flex;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    text-transform: uppercase;
}


a:link {
    color: white;
    text-decoration: none;

}

a:visited {
    color: inherit;
}

a:hover {
    color: inherit;
}


`;
