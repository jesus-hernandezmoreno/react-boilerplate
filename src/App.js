import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* Redux */
import { signIn, finishLoading } from 'redux/modules/auth';
/* HOC */
import AuthRoute from './HOC/AuthRoute';
import PrivateRoute from './HOC/PrivateRoute';
/* Layout */
import Main from './Layout/Main';
import Empty from './Layout/Empty';
/* Views */
import Login from './Views/Login';
/* Modal */
import ModalRoot from 'Modals/ModalRoot';
/* Routes */
import routes from 'routes';

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('boilerplate_auth_token');
    if (token) {
      dispatch(signIn());
      history.push(history.location.pathname);
    } else {
      dispatch(finishLoading());
    }
  }, [dispatch, history]);
  return (
    <div>
      <Switch location={location}>
        <AuthRoute exact path="/login" layout={Empty} component={Login} />
        {routes.map(route => (
          <PrivateRoute exact path={route.path} layout={Main} component={route.component} />
        ))}
        <Redirect from="/" to="/home" />
      </Switch>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        transition={Zoom}
      />
      <ModalRoot />
    </div>
  );
};

export default App;
