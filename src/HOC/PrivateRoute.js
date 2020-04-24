import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  isAuthenticated,
  isLoading,
  ...rest
}) => (
  <>
    {!isLoading ? (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    ) : null}
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
});

export default connect(mapStateToProps)(PrivateRoute);
