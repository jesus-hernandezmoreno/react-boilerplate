import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/* Redux */
import { signOut } from 'redux/modules/auth';
/* Components */
import Button from 'Components/Button';
/* Styled Components */
import { Container, StyledLink, Icon, Logo } from './styled';
/* Routes */
import routes from 'routes';

const logo = require('assets/logo.svg');

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    localStorage.clear();
    dispatch(signOut());
    history.push('/login');
  };
  return (
    <Container>
      <StyledLink to="/">
        <Logo to="/" src={logo} />
      </StyledLink>
      {routes.map(route => (
        <StyledLink activeClassName="is-active" to={route.path}>
          <Icon className={route.icon} />
          {route.name}
        </StyledLink>
      ))}
      <Button onClick={logOut}>Logout</Button>
    </Container>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
