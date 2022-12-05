import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bannermarvel from 'assets/marvel2.jpg';

import LogoContainer from 'components/LogoContainer';
import MainBan from 'components/MainBan';
import MainBanner from 'components/MainBanner';

import { BannerContainer, Title } from './styles';

const noneHeader = () => (
  <header>
    <LogoContainer />
    <img src={bannermarvel} alt="bannermarvel" />
    <div className="container py-4 d-flex justify-content-3 align-items-center">
      <div className="container">
        <ul className="d-flex justify-content-between list-unstyled">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME123
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/comics">
              COMICS
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <Title className="mt-5"> Characters</Title>
    </div>
  </header>
);

export default memo(noneHeader);
