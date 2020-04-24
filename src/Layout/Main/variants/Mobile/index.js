import React from 'react';
/* Components */
import TopNavbar from './Navbar/TopNavbar';
import BottomNavbar from './Navbar/BottomNavbar';
/* Styled Components */
import { Container, Content } from './styled';

const Mobile = ({ children }) => {
  return (
    <Container>
      <TopNavbar />
      <Content>{children}</Content>
      <BottomNavbar />
    </Container>
  );
};

export default Mobile;
