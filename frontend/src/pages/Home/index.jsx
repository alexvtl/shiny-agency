import styled from 'styled-components';
import homeillus from '../../home-illustration.svg';
import { StyledLink } from '../../utils/style/Atoms';
import colors from '../../utils/style/color';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Rectangle2 = styled.div`
  margin: 30px 30px 0px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

const LeftCol = styled.div`

  ${StyledLink} {
    width: 250px;
    position: absolute;
    align-text:center;
    padding:20px;
left: 136px;
top: 630px;
color:white;

background: #5843E4;
border-radius: 29px;
`;

const Homeill = styled.img`
  flex: 0, 5;
`;

const Textehome = styled.h2`
  width: 552px;
  height: 200px;
  font-family: 'Trebuchet MS';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 160.5%;
  /* or 80px */

  color: #2f2e41;
`;

function Home() {
  return (
    <HomeWrapper>
      <Rectangle2>
        <LeftCol>
          <Textehome>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </Textehome>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Homeill src={homeillus} alt="illustration home" />
      </Rectangle2>
    </HomeWrapper>
  );
}

export default Home;
