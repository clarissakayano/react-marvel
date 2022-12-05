import { memo } from 'react';

import { Button, Container } from 'react-bootstrap';

import { getImageUrl } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { BanCover } from './styles';

interface ICharacterCardProps {
  character: CharacterType;
  thumbnail: CharacterType;
}
const MainBanner: React.FC<ICharacterCardProps> = ({ character }) => (
  <BanCover coverImage={getImageUrl(character.thumbnail)}>
    <Container className="flex-grow-1 my-3">
      <h1>{character?.name}</h1>
      {character && <p>{character.description}</p>}
    </Container>
  </BanCover>
);
export default memo(MainBanner);
