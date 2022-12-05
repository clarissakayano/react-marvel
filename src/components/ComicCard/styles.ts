import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
  alt: string;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  border-bottom: 5px solid red;
`;

export const Card = styled.div``;
