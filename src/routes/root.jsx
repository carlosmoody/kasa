import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const RootWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Root() {
  return (
    <RootWrapper>
      <Header />
      <Outlet />
      <Footer />
    </RootWrapper>
  );
}
