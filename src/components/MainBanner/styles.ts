import styled from 'styled-components';

export const BannerContainer = styled.section`
  background-repeat: no-repeat;
  background-size: cover;

  background-position: auto;
  margin: 0;
  padding: 0;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0.4);
  }
`;
