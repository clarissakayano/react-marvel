import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  margin-top: 0px;
  padding: 10% 1% 0% 30%;
  border-bottom: solid 5px #e62429;
  overflow: hidden;
`;
