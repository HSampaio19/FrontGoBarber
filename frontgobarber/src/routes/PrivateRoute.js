import proptypes from 'proptypes';
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import { store } from '../store';

export default function PrivateRoute({ children }) {
  const { signed } = store.getState().auth;

  const { isPrivate } = children.props;

  const Layout = signed && isPrivate ? DefaultLayout : AuthLayout;

  if (!signed && isPrivate) {
    return <Navigate to="/" replace />;
  }
  return <Layout>{children}</Layout>;
}

PrivateRoute.propTypes = {
  children: proptypes.oneOfType([proptypes.element, proptypes.func]).isRequired,
};
