import React from 'react';
import PropTypes from 'proptypes';

import { Wrapper } from './styles';

function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
