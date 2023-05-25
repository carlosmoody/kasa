import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 57px;
`;

const NavLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
`;

export default function Header() {
  return (
    <StyledHeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Kasa" />
      </NavLink>
      <StyledNav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </StyledNav>
    </StyledHeaderContainer>
  );
}
