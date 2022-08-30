/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  button {
    background: none;
    border: none;
    position: relative;
  }
`;

export const NotificationList = styled.ul`
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  min-width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  border-radius: 4px;
  padding: 0;
  display: block;
  height: 0px;
  transition: height 0.35s, padding 0.35s;
  transition-delay: 0s;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 0px solid rgba(0, 0, 0, 0.8);
    transition: border 0.25s;
    transition-delay: 0.35s;
  }

  ${({ visible }) =>
    visible &&
    css`
      position: absolute;
      padding: 15px 5px;
      height: 300px;
      transition-delay: 0.25s;

      &::before {
        content: '';
        position: absolute;
        left: calc(50% - 20px);
        top: -20px;
        width: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid rgba(0, 0, 0, 0.8);
        transition-delay: 0s;
      }

      button {
        display: block;
      }
    `}
`;

export const Scroll = styled(PerfectScrollbar)`
  visibility: ${props => (props.visible ? 'normal' : 'hidden')};
  max-height: 260px;
  padding: 5px 15px;
  transition-delay: ${props => (props.visible ? '0.35s' : '0s')};
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  button {
    display: none;
    font-size: 12px;
    color: #3b9eff;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  ${({ unread }) =>
    unread &&
    css`
      p {
        color: #ff892e;
      }
      button {
        display: block;
      }
    `}
`;
