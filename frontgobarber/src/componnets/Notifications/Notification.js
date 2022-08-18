import proptypes from 'proptypes';
import React from 'react';

export default function Notification({ children, ...props }) {
  const { unread } = props;

  return (
    <div>
      {children}
      {unread ? (
        <button type="button">Marcar como lido</button>
      ) : (
        <span>Lido</span>
      )}
    </div>
  );
}

Notification.propTypes = {
  children: proptypes.oneOfType([proptypes.element, proptypes.func]).isRequired,
  unread: proptypes.bool.isRequired,
};
