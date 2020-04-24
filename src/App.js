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
import Home from './Views/Home';
import Blog from 'Views/Blog';
import Docs from 'Views/Docs';
import Community from 'Views/Community';
/* Modal */
import ModalRoot from 'Modals/ModalRoot';

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
        <PrivateRoute exact path="/home" layout={Main} component={Home} />
        <PrivateRoute exact path="/docs" layout={Main} component={Docs} />
        <PrivateRoute exact path="/blog" layout={Main} component={Blog} />
        <PrivateRoute exact path="/community" layout={Main} component={Community} />
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
