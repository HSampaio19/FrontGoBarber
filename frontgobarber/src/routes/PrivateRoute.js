import proptypes from 'proptypes';
import React from 'react';
import { Navigate } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function PrivateRoute({ children }) {
  const signed = true;
  const { isPrivate } = children.props;

  const Layout = signed ? AuthLayout : DefaultLayout;

  if (!signed && isPrivate) {
    console.tron.log(Layout);
    return <Navigate to="/" replace />;
  }
  return <Layout>{children}</Layout>;
}

PrivateRoute.propTypes = {
  children: proptypes.oneOfType([proptypes.element, proptypes.func]).isRequired,
};
