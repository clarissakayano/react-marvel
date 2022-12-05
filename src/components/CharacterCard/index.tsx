import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { getImageUrl } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { Cover } from './styles';

interface ICharacterCardProps {
  character: CharacterType;
}
const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <div className="card-wrapper">
      <Cover
        coverImage={getImageUrl(character.thumbnail)}
        alt={character.name}
      />
      <Link
        to={`/characters/${character.id}`}
      >{`(${character.id}) ${character.name}`}</Link>
    </div>
  );
};

export default memo(CharacterCard);
