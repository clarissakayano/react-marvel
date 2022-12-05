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
