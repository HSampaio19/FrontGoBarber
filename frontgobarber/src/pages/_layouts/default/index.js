import React from 'react';
import PropTypes from 'proptypes';

import { Wrapper, Content } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
