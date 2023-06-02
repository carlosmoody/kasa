import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat';
      color: ${colors.primary};
    }

    body {
      margin: 0;
    }

    a:link {
      text-decoration: none;
    }

    a:visited {
          text-decoration: none;
    }

    a:hover {
          text-decoration: none;
    }

    a:active {
          text-decoration: none;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
