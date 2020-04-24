import React from 'react';
/* Styled Components */
import { MobileBottomContainer, StyledLink, Icon } from './styled';

const MobileBottomNavbar = () => {
  return (
    <MobileBottomContainer>
      <StyledLink activeClassName="is-active" to="/home">
        <Icon className="fa fa-home" />
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/blog">
        <Icon className="fa fa-blog" />
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/docs">
        <Icon className="fa fa-file-alt" />
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/community">
        <Icon className="fa fa-users" />
      </StyledLink>
    </MobileBottomContainer>
  );
};

export default MobileBottomNavbar;
