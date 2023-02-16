import React, { memo } from 'react';
import './index.css';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import { getImageUrl } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { Cover } from './styles';

interface ICardChProps {
  character: CharacterType;
}
const CardCh: React.FC<ICardChProps> = ({ character }) => {
  return (
    <Card className="w-100 effectcard img-fluid color effect">
      <Link to={`/characters/${character.id}/${character.name}`}>
        <Cover
          className="px-4 zoom"
          aspectRatio="1x1"
          coverimage={getImageUrl(character.thumbnail)}
        >
          <div />
        </Cover>
      </Link>
      <Card.Body className="text">
        <Link to={`/characters/${character.id}/${slugify(character.name)}`}>
          {character.name}
        </Link>
        <Card.Text />
      </Card.Body>
    </Card>
  );
};

export default memo(CardCh);
