import styled from "styled-components";
import colors from "../utils/style/colors";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <p>Accueil</p>
        <p>A Propos</p>
      </nav>
    </div>
  );
}
