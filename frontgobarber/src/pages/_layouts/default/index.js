import React from 'react';
import PropTypes from 'proptypes';
import Header from '../../../componnets/Header';

import { Wrapper, Content } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
