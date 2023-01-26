import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../dark-logo.png';
import { StyledLink } from '../../utils/style/Atoms';

const LogoDark = styled.img`
  height: 70px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoDark src={logo} />
      </Link>
      <nav>
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Questionnaire
        </StyledLink>
        <StyledLink to="/freelances" $isFullLink>
          Profils
        </StyledLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
