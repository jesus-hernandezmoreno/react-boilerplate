import styled from 'styled-components';
/* Components */
import { Paragraph } from 'typography';

export const Container = styled.div``;

export const Logo = styled.img`
  width: 20rem;
  display: block;
  margin: 3rem auto;
`;

export const LoginForm = styled.div`
  background: ${props => props.theme.form.background};
  box-shadow: ${props => props.theme.common.boxShadow};
  min-width: 30rem;
  padding: 2rem;
`;

export const SignUpText = styled(Paragraph)`
  margin-top: 3rem;
  text-align: center;
  a {
    color: ${props => props.theme.typography.paragraph.highlightColor};
    font-weight: bold;
    text-decoration: none;
    margin: 0 0.5rem;
  }
`;

export const ErrorText = styled(Paragraph)`
  text-align: center;
  margin: 1rem 0;
`;

export const Label = styled.p`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
  color: #757575;
  font-weight: bold;
  cursor: pointer;
`;
