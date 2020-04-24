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
  padding: 2rem;
  min-height: calc(100vh - 7rem);
  max-width: 80%;
  margin: 0 auto;
`;
