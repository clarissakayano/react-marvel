import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineSearch } from 'react-icons/md';

import background from 'assets/quadrinhos.jpg';

import { useComics } from 'context/ComicsContext';

import ComicCard from 'components/ComicCard';
import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import useTitle from 'hooks/useTitle';

import { Pagination } from 'styles/Pagination';

import { BgImage, ButtonClear, ButtonSearch, Title, Wrapper } from './styles';

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
    <Wrapper>
      <BgImage className="image">
        <img className="imagebg" src={background} alt="background" />
        <header>
          <LogoContainer />
        </header>
        <main>
          <Container className="d-flex justify-content-center">
            <div>
              <Title className="d-flex justify-content-center">Comics</Title>
            </div>
          </Container>
          <Container className="d-flex justify-content-center justify-content-sm-start">
            <div className="d-flex">
              <input
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <ButtonSearch id="search" type="button" onClick={handleSearch}>
              <MdOutlineSearch />
            </ButtonSearch>
            {search.length > 0 && (
              <ButtonClear id="color" type="button" onClick={handleClearSearch}>
                Clear
              </ButtonClear>
            )}
          </Container>
          <Container>
            {isLoading && <p className="text-center">Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!isLoading && !error && (
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 img-fluid g-4 justify-content-center mb-5 img-fluid mt-3">
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
    </Wrapper>
  );
};

export default memo(Comics);
