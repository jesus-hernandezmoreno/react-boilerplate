import React from 'react';
/* Styled Components */
import { Container, StyledLink, Icon, Logo } from './styled';

const logo = require('assets/logo.svg');

const Navbar = () => {
  return (
    <Container>
      <StyledLink to="/">
        <Logo to="/" src={logo} />
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/home">
        <Icon className="fa fa-home" />
        Home
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/blog">
        <Icon className="fa fa-blog" />
        Blog
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/docs">
        <Icon className="fa fa-file-alt" />
        Docs
      </StyledLink>
      <StyledLink activeClassName="is-active" to="/community">
        <Icon className="fa fa-users" />
        Community
      </StyledLink>
    </Container>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
