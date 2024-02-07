import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Inter', sans-serif;
    background-color: #121214;
    color: #FFF;
  }
  
  body::-webkit-scrollbar{
    width: 9px;
    height: 6px;
  }
  body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #FFA634;
  }

  .spinner{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;