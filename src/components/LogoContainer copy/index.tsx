import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logomarvel from 'assets/marvel1.jpg';

import { LogoBg } from './styles';

const LogoFooter: React.FC = () => (
  <LogoBg>
    <Container>
      <Row className="row-cols-1 row-cols-md-3">
        <Col className="d-flex justify-content-center mt-3 ">
          <Link to="/" className="px-4">
            <img src={logomarvel} alt="logomarvel" className="img-fluid mb-3" />
          </Link>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <a
            href="https://www.linkedin.com/in/clarissa-a-kayano-37a011259/"
            target="blank"
          >
            <span className="color">site por </span>
            <span> Clarissa A. Kayano</span>
          </a>
        </Col>
      </Row>
    </Container>
  </LogoBg>
);

export default memo(LogoFooter);
