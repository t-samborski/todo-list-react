import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  margin: 20px auto;
  max-width: 800px;
  background-color: rgb(200, 200, 200);
  font-family: Arial, Helvetica, sans-serif;
}
`;