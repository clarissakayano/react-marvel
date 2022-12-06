import { memo, useCallback, useEffect, useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

import background from 'assets/quadrinhos.jpg';

import { useCharacters } from 'context/CharactersContext';

import CardCh from 'components/CardCh';
import Footer from 'components/Footer';
import LogoContainer from 'components/LogoContainer';

import useTitle from 'hooks/useTitle';

import { Pagination } from 'styles/Pagination';

import { BgImage, Title } from './styles';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const setTitle = useTitle();

  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    error,
    fetchCharacters,
  } = useCharacters();

  const handlePageChange = useCallback(
    (page: number) => fetchCharacters(page, search),
    [fetchCharacters, search],
  );

  const handleSearch = useCallback(
    () => fetchCharacters(1, search),
    [fetchCharacters, search],
  );

  const handleClearSearch = useCallback(() => {
    fetchCharacters(1);
    setSearch('');
  }, [fetchCharacters]);

  useEffect(() => {
    setTitle('Home');
  });

  return (
    <BgImage className="image">
      <img className="imagebg" src={background} alt="background" />
      <header>
        <LogoContainer />
      </header>
      <Container>
        <div>
          <Title className="d-flex justify-content-center">Characters</Title>
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
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center mb-5 img-fluid">
              {characters.map((character) => (
                <Col className="d-flex  g-3" key={character.id}>
                  <CardCh character={character} />
                </Col>
              ))}
              {!isLoading && !error && characters.length === 0 && (
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
        </div>
      </Container>
      <Footer />
    </BgImage>
  );
};

export default memo(Home);
