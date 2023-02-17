import styled from 'styled-components';

import background from 'assets/quadrinhos.jpg';

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
