import React from 'react';
import proptypes from 'proptypes';
import { MdNotifications, MdNotificationsActive } from 'react-icons/md';

function ButtonNotification({ hasUnread, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {hasUnread ? (
        <MdNotificationsActive color="#ff892e" size={30} />
      ) : (
        <MdNotifications color="#3b9eff" size={30} />
      )}
    </button>
  );
}

export default ButtonNotification;

ButtonNotification.propTypes = {
  hasUnread: proptypes.bool.isRequired,
  onClick: proptypes.func.isRequired,
};
