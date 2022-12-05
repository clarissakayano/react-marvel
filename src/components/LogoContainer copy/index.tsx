import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logomarvel from 'assets/marvel1.jpg';

import { LogoBg } from './styles';

const LogoFooter: React.FC = () => (
  <LogoBg>
    <Container>
      <Row className="row-col">
        <Col className="d-flex mt-3">
          <Link to="/" className="px-4">
            <img src={logomarvel} alt="logomarvel" className="img-fluid" />
          </Link>
          <ul>
            <Link to="/">About Marvel</Link>
            <li>Films</li>
            <li>Help/Faqs</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </LogoBg>
);

export default memo(LogoFooter);
