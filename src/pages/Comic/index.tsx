import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import { useComics } from 'context/ComicsContext';

import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { BgColor, BgContainer } from './styles';

const Comic: React.FC = () => {
  const { comic, fetchComic, error, isLoading } = useComics();
  const setTitle = useTitle();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchComic(id);
  }, [fetchComic, id]);

  useEffect(() => {
    setTitle('Comic');
  });

  return (
    <Container>
      <header>
        <LogoContainer />
      </header>
      <BgColor className="mt-3">
        <div>
          <h1 className="d-flex mt-2 justify-content-center row row-col-sm py-3">
            {comic?.title ?? 'Loading...'}
          </h1>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!isLoading && !error && comic && (
          <div className="d-column justify-content-center">
            <p className="d-flex justify-content-center">ID: {comic.id}</p>
            <div className="d-flex row-cols-1 img-fluid justify-content-center">
              <BgContainer>
                <div className="row p-4">
                  <div className="col">
                    <img src={getImageUrl(comic.thumbnail)} alt={comic.title} />
                  </div>
                  <div className="col">
                    <p>{comic.description}</p>
                  </div>
                </div>
                <div className="background">
                  <img
                    className="blur"
                    src={getImageUrl(comic.thumbnail)}
                    alt={comic.title}
                  />
                </div>
              </BgContainer>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-center mt-5 py-3">
          <Button href="/" variant="danger">
            Back
          </Button>
        </div>
      </BgColor>
      <Footer />
    </Container>
  );
};

export default memo(Comic);
