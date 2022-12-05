import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
}

export const Container = styled.div`
  display: flex;
  background: ${({ coverimage }) => `${coverimage}`};
  .bgcolor {
    background: rgba(0, 0, 0, 0.7);
  }
  .background::after {
    position: absolute;
    top: -40px;
    left: 40px;
    height: 100%;
    width: 100%;
    width: calc(100% + 80px);
    height: calc(100% + 80px);
    z-index: -1;

    background::after {
      content:'';
       filter: blur(41px);
    }

    img::before {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
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

export const BgImg = styled.section<ICoverProps>`
  background: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 400px;
  background-blend-mode: darken;
`;

export const BgColor = styled.div`
  background-color: black;
  color: white;
`;

export const CharacterName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
  color: white;
`;
