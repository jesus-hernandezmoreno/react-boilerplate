import React from 'react';
/* Styled Components */
import { MobileBottomContainer, StyledLink, Icon } from './styled';
/* Routes */
import routes from 'routes';

const MobileBottomNavbar = () => {
  return (
    <MobileBottomContainer>
      {routes.map(route => (
        <StyledLink activeClassName="is-active" to={route.path}>
          <Icon className={route.icon} />
        </StyledLink>
      ))}
    </MobileBottomContainer>
  );
};

export default MobileBottomNavbar;
