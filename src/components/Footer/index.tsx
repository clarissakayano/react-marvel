import { memo } from 'react';

import LogoFooter from 'components/LogoContainer copy';

import { BgFooter } from './styles';

const Footer: React.FC = () => (
  <BgFooter className="mt-5">
    <LogoFooter />
  </BgFooter>
);

export default memo(Footer);
