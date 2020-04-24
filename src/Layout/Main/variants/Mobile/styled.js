import styled from 'styled-components';

export const Container = styled.div`
  /* Styling */
  background: ${props => props.theme.background.main};
`;

export const Content = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 2rem;
  min-height: 100vh;
`;
