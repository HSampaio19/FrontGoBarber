import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #555, #111);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background-color: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #ff484d;
      font-weight: bold;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    hr {
      height: 1px;
      margin: 10px 0 20px 0;
      border: 0;
      background: rgba(255, 255, 255, 0.15);
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#3b9eff')};
      }
    }

    a {
      margin-top: 15px;
      color: #fff;
      font-size: 16px;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }

    label {
      margin-bottom: 30px;

      img {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee;

        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }

      input {
        display: none;
      }
    }
  }
`;
