import React from 'react';
import proptypes from 'proptypes';
import { MdNotifications, MdNotificationsActive } from 'react-icons/md';

function ButtonNotification(props) {
  const { hasUnread } = props;
  return hasUnread ? (
    <button type="button">
      <MdNotificationsActive color="#ff892e" size={30} />
    </button>
  ) : (
    <button type="button">
      <MdNotifications color="#3b9eff" size={30} />
    </button>
  );
}
export default ButtonNotification;

ButtonNotification.propTypes = {
  hasUnread: proptypes.bool.isRequired,
};
