import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Navbanner } from './styles';

const Nav: React.FC = () => (
  <Navbanner>
    <Container className="d-flex align-items-center justify-content-center">
      <Link to="/" className="px-4">
        HOME
      </Link>
      <Link to="/comics" className="px-4">
        COMICS
      </Link>
    </Container>
  </Navbanner>
);

export default memo(Nav);
