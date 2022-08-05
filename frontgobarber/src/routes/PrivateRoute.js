import proptypes from 'proptypes';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const signed = true;

  if (!signed) {
    return <Navigate to="/" replace />;
  }
  return children;
}

PrivateRoute.propTypes = {
  children: proptypes.oneOfType([proptypes.func, proptypes.element]).isRequired,
};
