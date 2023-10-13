import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #1C203B;
  }
  :root {
    --blue-50: #1C203B;
    --blue-100: #68E7E7;
    --white: #fff;
    --card-color: #33364E;
    --gap-1: 22px;
  }
`;

export default GlobalStyle;
