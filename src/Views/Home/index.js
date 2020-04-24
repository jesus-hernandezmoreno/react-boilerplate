import React from 'react';
import { useDispatch } from 'react-redux';
/* Redux */
import { signOut } from 'redux/modules/auth';
/* Components */
import Button from 'Components/Button';
/* Styled Components */
import { Container, Link, Logo, Code, Paragraph } from './styled';

import logo from 'assets/logo.svg';

function Home({ history }) {
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.clear();
    dispatch(signOut());
    history.push('/login');
  };
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Paragraph>
        Edit <Code>src/views/Home.js</Code> and save to reload.
      </Paragraph>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: 50 }}
      >
        Learn React
      </Link>
      <Button onClick={logOut}>Logout</Button>
    </Container>
  );
}

export default Home;
