import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 50px auto;

  button {
    width: 100%;
    height: 44px;
    margin: 10px 0 0;
    background: #f3124a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.2, '#f64c75')};
    }
  }
`;

export default Container;
