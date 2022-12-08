import { memo, useEffect } from 'react';

import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCharacters } from 'context/CharactersContext';

import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { BgColor, BgContainer, Cont } from './styles';

const Character: React.FC = () => {
  const { character, isLoading, error, fetchCharacter } = useCharacters();
  const setTitle = useTitle();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchCharacter(id);
  }, [fetchCharacter, id]);

  useEffect(() => {
    setTitle('Character');
  });

  return (
    <Cont>
      <header className="mb-5">
        <LogoContainer />
      </header>
      <main>
        <Container>
          <BgColor className="mt-5">
            <h1 className="d-flex justify-content-center">
              {character?.name ?? 'Loading...'}
            </h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && character && (
              <div className="d-column justify-content-center mt-3">
                <p className="d-flex justify-content-center">
                  ID: {character.id}
                </p>
                <div className="d-flex row-cols-1 img-fluid justify-content-center">
                  <BgContainer>
                    <div className="row p-4">
                      <div className="col">
                        <img
                          className="img-fluid"
                          src={getImageUrl(character.thumbnail)}
                          alt={character.name}
                        />
                      </div>
                      <div className="col">
                        <p>{character.description}</p>
                      </div>
                      <div className="background">
                        <img
                          className="blur img-fluid"
                          src={getImageUrl(character.thumbnail)}
                          alt={character.name}
                        />
                      </div>
                    </div>
                  </BgContainer>
                </div>
              </div>
            )}
            <div className="d-flex justify-content-center py-3">
              <Button href="/" variant="danger">
                Back
              </Button>
            </div>
          </BgColor>
        </Container>
      </main>
      <Footer />
    </Cont>
  );
};

export default memo(Character);
