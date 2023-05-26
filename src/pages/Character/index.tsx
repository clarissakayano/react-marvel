import { memo, useEffect } from 'react';

import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCharacters } from 'context/CharactersContext';

import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { BgColor, BgImg, Wrapper } from './styles';

const Character: React.FC = () => {
  const { character, isLoading, error, fetchCharacter } = useCharacters();

  const { id } = useParams();

  useEffect(() => {
    if (id) fetchCharacter(id);
  }, [fetchCharacter, id]);

  const setTitle = useTitle();
  useEffect(() => setTitle(`${character?.name} | Characters`));
  return (
    <Wrapper>
      <header>
        <LogoContainer />
      </header>
      {isLoading && <p className="text-center">Loading...</p>}
      {!isLoading && character && (
        <BgImg
          coverimage={getImageUrl(character.thumbnail)}
          className="d-flex flex-column "
        >
          <Container>
            <BgColor className="mt-5 mb-5 py-5">
              <h1 className="d-flex justify-content-center">
                {character?.name ?? 'Loading...'}
              </h1>
              <div className="d-column justify-content-center mt-3">
                <p className="d-flex justify-content-center">
                  ID: {character.id}
                </p>

                <div className="row row-cols-1 row-cols-md-2 p-4">
                  <div className="col">
                    <img
                      className="img-fluid"
                      src={getImageUrl(character.thumbnail)}
                      alt={character.name}
                    />
                  </div>
                  <div className="col">
                    <p className="py-3">{character.description}</p>
                    <p>{character.description}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center py-3">
                <Button href="/" variant="danger">
                  Back
                </Button>
              </div>
            </BgColor>
          </Container>
        </BgImg>
      )}
      <Footer />
    </Wrapper>
  );
};

export default memo(Character);
