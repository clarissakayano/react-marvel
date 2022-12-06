import { memo } from 'react';

import marvel from 'assets/marvel1.jpg';

import Nav from 'components/Nav';

import { LogoBg } from './styles';

const LogoC: React.FC = () => (
  <LogoBg className="d-flex justify-content-center">
    <div>
      <div className="d-flex justify-content-center mt-2">
        <img src={marvel} alt="marvel" />
      </div>
      <div className="mt-3 mb-3 border-top">
        <Nav />
      </div>
    </div>
  </LogoBg>
);

export default memo(LogoC);
