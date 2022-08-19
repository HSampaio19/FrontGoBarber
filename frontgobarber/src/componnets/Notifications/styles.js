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
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  min-width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
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
    visibility: hidden;
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
        visibility: visible;
      }
    `}
`;
