import styled from 'styled-components';

export const Text = styled.p`
  font-size: 15px;
  color: black;
`;

export const BgColor = styled.div`
  background-color: black;
  color: white;

  h1 {
    font-size: 32px;
  }
`;

export const BgContainer = styled.div``;

interface ICoverProps {
  coverimage: string;
}
export const BgImage = styled.div<ICoverProps>`
  background: ${({ coverimage }) => `rgba(0, 0, 0, 0.7)url(${coverimage} ) `};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
`;
