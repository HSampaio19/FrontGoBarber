import React from 'react';
import PropTypes from 'proptypes';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
