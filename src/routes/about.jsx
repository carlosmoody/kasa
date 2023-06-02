import aboutPicture from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBanner = styled.img`
  height: 223px;
  margin: 50px 100px 0px 100px;
  border-radius: 25px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
`;

export default function About() {
  return (
    <StyledWrapper>
      <StyledBanner src={aboutPicture} alt="Paysage de montage" />
    </StyledWrapper>
  );
}
