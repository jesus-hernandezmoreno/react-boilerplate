import styled from 'styled-components';

export const Container = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  /* Styling */
  background: ${props => props.theme.background.main};
`;
