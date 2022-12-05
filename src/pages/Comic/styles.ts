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

export const BgContainer = styled.div`

  background-image: cover;

.background {
  position: absolute;
  top: -40px;
  left: -40px;
  height: 100%;
  width: 100%;
  width: calc(100% + 80px);
  height: calc(100% + 80px);
  z-index: -1;


  .blur {
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: blur(20px);
  }
`;