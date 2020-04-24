import React from 'react';
/* Styled Components */
import { Container, Link, Logo, Code, Paragraph } from './styled';

import logo from 'assets/logo.svg';

function Docs() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Paragraph>
        Edit <Code>src/views/Docs.js</Code> and save to reload.
      </Paragraph>
      <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </Link>
    </Container>
  );
}

export default Docs;
