import homePicture from "../assets/IMG.png";
import styled from "styled-components";
import colors from "../utils/style/colors";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBanner = styled.div`
  position: relative;
  height: 223px;
  overflow: hidden;
  margin: 50px 100px 0px 100px;
`;

const StyledBannerPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
`;

const StyledBannerOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledBannerTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: white;
`;

const StyledList = styled.div`
  background-color: ${colors.background};
  border-radius: 25px;
  margin: 43px 100px 0px 100px;
  padding: 56px 50px 56px 50px;
`;

export default function Home() {
  return (
    <StyledWrapper>
      <StyledBanner>
        <StyledBannerPicture src={homePicture} alt="Océan et falaises" />
        <StyledBannerOverlay>
          <StyledBannerTitle>Chez vous, partout et ailleurs</StyledBannerTitle>
        </StyledBannerOverlay>
      </StyledBanner>
      <StyledList />
    </StyledWrapper>
  );
}
