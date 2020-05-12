import React from 'react';
/* Styled Components */
import { Container, Link, Logo, Code, Paragraph } from './styled';

import logo from 'assets/logo.svg';

function Home() {
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
    </Container>
  );
}

export default Home;
