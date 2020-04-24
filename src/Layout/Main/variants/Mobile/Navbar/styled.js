import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  background: ${props => props.theme.navbar.background};
  width: 100%;
  padding: 1rem;
  box-shadow: ${props => props.theme.common.boxShadow};
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  font-size: 1.5rem;
  color: ${props => props.theme.navbar.link};
  text-decoration: none;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  &:hover {
    color: ${props => props.theme.navbar.hover};
  }
  &.is-active {
    color: ${props => props.theme.navbar.active};
  }
`;

export const Icon = styled.i`
  margin-bottom: 1rem;
  &:before {
    font-size: 2rem !important;
  }
`;

export const Logo = styled.img`
  height: 5rem;
`;

/* MOBILE */
export const MobileBottomContainer = styled.nav`
  background: ${props => props.theme.navbar.background};
  width: 100%;
  padding: 1rem;
  box-shadow: ${props => props.theme.common.boxShadow};
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 9999;
`;

export const MobileTopContainer = styled.nav`
  background: ${props => props.theme.navbar.background};
  width: 100%;
  padding: 1rem 1.5rem;
  box-shadow: ${props => props.theme.common.boxShadow};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 99999;
`;
