import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
  }

  body, input, button, textarea {
    font: 400 16px 'Robot', sans-serif;
  }

  ul {
      list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
