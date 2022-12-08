import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

import background from 'assets/quadrinhos.jpg';

import { useComics } from 'context/ComicsContext';

import ComicCard from 'components/ComicCard';
import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import useTitle from 'hooks/useTitle';

import { Pagination } from 'styles/Pagination';

import { BgImage } from './styles';

const Comics: React.FC = () => {
  const [search, setSearch] = useState('');
  const setTitle = useTitle();

  const { comics, isLoading, totalPages, currentPage, error, fetchComics } =
    useComics();

  const handlePageChange = useCallback(
    (page: number) => fetchComics(page, search),
    [fetchComics, search],
  );

  useEffect(() => {
    setTitle('Comics');
  });

  const handleSearch = useCallback(
    () => fetchComics(1, search),
    [fetchComics, search],
  );

  const handleClearSearch = useCallback(() => {
    fetchComics(1);
    setSearch('');
  }, [fetchComics]);

  return (
    <BgImage className="image">
      <img className="imagebg" src={background} alt="background" />
      <header>
        <LogoContainer />
      </header>
      <main>
        <Container>
          <h1 className="d-flex justify-content-center">Comics</h1>
          <div className="d-flex mb-3">
            <input
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="danger" type="button" onClick={handleSearch}>
              Buscar
            </Button>
            {search.length > 0 && (
              <Button
                className="mx-3"
                variant="primary"
                type="button"
                onClick={handleClearSearch}
              >
                Limpar
              </Button>
            )}
          </div>

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!isLoading && !error && (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 img-fluid g-4 justify-content-center mb-5 img-fluid">
              {comics.map((comic) => (
                <Col className="d-flex " key={comic.id}>
                  <ComicCard comic={comic} />
                  {comic.text}
                </Col>
              ))}
              {!isLoading && !error && comics.length === 0 && (
                <p>Nenhum resultado encontrado</p>
              )}
            </Row>
          )}
          {totalPages > 1 && (
            <Pagination
              className="mt-3 flex-wrap"
              forcePage={currentPage - 1}
              nextLabel=">"
              onPageChange={(p) => handlePageChange(p.selected + 1)}
              pageCount={totalPages}
              previousLabel="<"
            />
          )}
        </Container>
      </main>
      <Footer />
    </BgImage>
  );
};

export default memo(Comics);
