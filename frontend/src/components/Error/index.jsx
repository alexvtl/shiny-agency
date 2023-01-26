import styled from 'styled-components';
import colors from '../../utils/style/color';
import Errorlogo from '../../4044.svg';

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={Errorlogo} />
      <ErrorSubtitle>Il semblerait qu’il y ait un problème</ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default Error;
