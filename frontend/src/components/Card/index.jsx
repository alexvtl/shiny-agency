import PropTypes from 'prop-types';
import defaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { Link } from 'react-router-dom';

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`;
const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`;

const CardWrapper = styled(Link)`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px;
background-color: ${colors.backgroundLight};
border-radius: 30px;
width: 300px;
height: 300px;
transition: 200ms;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px #e2e3e9;
`;

function Card({ job, name, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{job}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardTitle>{name}</CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  job: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  name: '',
  job: '',
  picture: defaultPicture,
};

export default Card;
