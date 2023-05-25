import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat';
      color: ${colors.primary};
    }

    body {
      margin: 0;
      padding: 40px 100px 0px 100px;
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
