import styled from 'styled-components';

export const LogoBg = styled.div`
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  border-color: white;

  @media (max-width: 768px) {
  }

  //bootstrap override
  .card-text {
    box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3);
    font-size: 12px;
  }

  .card:hover {
    a:link {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

    a:visited {
      color: none;
    }

    a:active {
      color: none;
    }
  }
`;
