import { memo } from 'react';

import LogoFooter from 'components/LogoContainer copy';

import { BgFooter } from './styles';

const Footer: React.FC = () => (
  <BgFooter>
    <LogoFooter />
  </BgFooter>
);

export default memo(Footer);
