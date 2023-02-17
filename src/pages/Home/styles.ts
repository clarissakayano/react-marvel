import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

import background from 'assets/quadrinhos.jpg';

import { ThumbnailType } from 'types/CharacterType';

export const BgColor = styled.div``;

interface ICoverProps {
  coverImage: string;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};

  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3);
  background: red;
  color: #e62429;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
`;

export const Container = styled.div``;

export const BgImage = styled.div`
  background-image: url(${background});
  object-fit: cover;
  height: 100%;
  width: 100%;
  filter: blur(0px);
  index: -1;

  .imagebg {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    filter: blur(15px);
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
`;

export const ButtonSearch = styled.button`
  background-color: transparent;
  color: white;
  padding: 2px;
  border: none;
`;
export const ButtonClear = styled.button`
  background-color: transparent;
  color: white;
  padding: 2px;
  border-radius: 10%;
  margin-left: 15px;
  :hover {
    background-color: red;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
