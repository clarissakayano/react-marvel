import React, { memo } from 'react';
import './index.css';

import { Card } from 'react-bootstrap';

import { getImageUrl } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { Cover } from './styles';

interface ICardChProps {
  character: CharacterType;
}
const CardCharacter: React.FC<ICardChProps> = ({ character }) => {
  return (
    <Card className="w-100 img-fluid effect">
      <Cover
        className="px-4 zoom"
        aspectRatio="1x1"
        coverimage={getImageUrl(character.thumbnail)}
      >
        <div />
      </Cover>
      <Card.Body className="text">
        {character.description}
        <Card.Text />
      </Card.Body>
    </Card>
  );
};

export default memo(CardCharacter);
