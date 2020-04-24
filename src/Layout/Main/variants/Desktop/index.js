import React from 'react';
/* Components */
import Navbar from './Navbar';
/* Styled Components */
import { Container, Content } from './styled';

const Desktop = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Desktop;
