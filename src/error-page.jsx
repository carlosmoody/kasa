import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const StyledHeaderOne = styled.h1`
  font-size: 288px;
  font-weight: 700;
  padding: 0px;
  margin: 0px;
`;

const StyledHeaderTwo = styled.h2`
  font-size: 36px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  padding-top: 182px;
`;

const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <StyledErrorContainer id="error-page">
        <StyledHeaderOne>404</StyledHeaderOne>
        <StyledHeaderTwo>
          Oups! La page que vous demandez n'existe pas.
        </StyledHeaderTwo>
        <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
      </StyledErrorContainer>
      <Footer />
    </>
  );
}
