import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverImage: string;
}

export const BanCover = styled(Ratio)<ICoverProps>`
  display: flex;
  background-image: url(${({ coverImage }) => coverImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
