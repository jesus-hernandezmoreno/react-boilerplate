import React from 'react';
/* Styled Components */
import { MobileTopContainer, StyledLink, Logo } from './styled';

const logo = require('assets/logo.svg');

const MobileTopNavbar = () => {
  return (
    <MobileTopContainer>
      <StyledLink to="/home">
        <Logo src={logo} />
      </StyledLink>
    </MobileTopContainer>
  );
};

MobileTopNavbar.displayName = 'MobileTopNavbar';

export default MobileTopNavbar;
