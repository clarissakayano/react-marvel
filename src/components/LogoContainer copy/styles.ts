import styled from 'styled-components';

export const LogoBg = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
  }

  li {
    list-style: none;
  }

  //bootstrap override
  .card-text {
    box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3);
    font-size: 12px;
    list-style: none;
  }

  .color {
    color: #9999;
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
