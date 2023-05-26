import { memo, useEffect } from 'react';

import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useComics } from 'context/ComicsContext';

import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { Wrapper } from 'pages/Character/styles';

import { BgColor, BgContainer, BgImage } from './styles';

const Comic: React.FC = () => {
  const { comic, fetchComic, error, isLoading } = useComics();
  const setTitle = useTitle();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchComic(Number(id));
  }, [fetchComic, id]);

  useEffect(() => {
    if (comic) {
      const pageTitle = `${comic.title} | Comics | Marvel`;
      setTitle(pageTitle);
    }
  }, [comic, setTitle]);

  return (
    <Wrapper>
      <header>
        <LogoContainer />
      </header>
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && !error && comic && (
        <BgImage
          coverimage={getImageUrl(comic.thumbnail)}
          className="d-flex flex-column"
        >
          <Container className="mt-5 mb-5">
            <BgColor className="mt-5 mb-5">
              <div>
                <h1 className="d-flex justify-content-center mt-2 px-4 py-3">
                  {comic?.title ?? 'Loading...'}
                </h1>
              </div>

              <div className="d-column justify-content-center">
                <p className="d-flex justify-content-center">ID: {comic.id}</p>
                <div className="d-flex row-cols-1 img-fluid justify-content-center">
                  <BgContainer>
                    <div />
                    <div className="row row-cols-1 row-cols-md-2 p-4">
                      <div className="col">
                        <div>
                          <img
                            className="img-fluid"
                            src={getImageUrl(comic.thumbnail)}
                            alt={comic.title}
                          />
                        </div>
                      </div>
                      <div className="col mt-3">
                        <p>{comic.description}</p>
                      </div>
                    </div>
                  </BgContainer>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5 py-5">
                <Button href="/comics" variant="danger">
                  Back
                </Button>
              </div>
            </BgColor>
          </Container>
        </BgImage>
      )}
      <Footer />
    </Wrapper>
  );
};

export default memo(Comic);
