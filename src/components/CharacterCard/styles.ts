import React from 'react';

import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverImage: string;
  children?: React.ReactNode;
  alt: string;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3);
`;

export const Card = styled.div`
  background-size: auto;
  background-color: blue;
`;
