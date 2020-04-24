import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
/* API */
//import { authUser } from 'api/auth';
/* Redux */
import { signIn } from 'redux/modules/auth';
/* Components */
import { Hero } from 'typography';
import Form from 'Components/Form';
import Button from 'Components/Button';
/* Styled Components */
import { Container, Logo, LoginForm, SignUpText, ErrorText, Label } from './styled';
/*Custom Hooks */
import { useForm, useModal } from 'hooks';
/* Utils */
//import { errorHandling } from 'utils/errorHandling';
import { formValid } from 'utils/formValidations';

const logo = require('assets/logo.svg');

const initialState = {
  email: '',
  password: ''
};

const Login = () => {
  const onSubmitCallback = () => {
    /* Fake implementation  */
    localStorage.setItem(
      'boilerplate_auth_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    );
    dispatch(signIn());
    history.push('/home');
  };
  /* Hooks */
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { onChange, onBlur, onSubmit, values, errors } = useForm(initialState, onSubmitCallback);
  const history = useHistory();
  const dispatch = useDispatch();
  const { displayModal } = useModal();

  const togglePasswordShown = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsPasswordShown(!isPasswordShown);
  };

  const openModal = () => {
    displayModal('RECOVER_PASSWORD');
  };
  const isValid = formValid(errors, values);
  return (
    <>
      <Container>
        <Logo src={logo} />
        <LoginForm>
          <Hero textAlign="center" margin="0">
            !Welcome!
          </Hero>
          <Form onSubmit={onSubmit}>
            <Form.Input
              error={errors.email}
              label="* Email"
              name="email"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Email"
              type="text"
              value={values.email}
            />
            <Form.Input
              error={errors.password}
              label="* Password"
              name="password"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Password"
              type={isPasswordShown ? 'text' : 'password'}
              value={values.password}
              isPasswordShown={isPasswordShown}
              togglePasswordShown={togglePasswordShown}
            />
            <Label onClick={openModal}>Forgot Password ?</Label>
            <Button disabled={!isValid} width="80%" margin="3rem auto 0 auto">
              Login
            </Button>
            {!isValid && <ErrorText>* Please fill out all the required fields</ErrorText>}
          </Form>
        </LoginForm>
        <SignUpText>
          ¿Need an accont?
          <Link to="/signup">Signup.</Link>
        </SignUpText>
      </Container>
    </>
  );
};

export default Login;
