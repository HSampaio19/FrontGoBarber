import React, { useEffect, useMemo, useState } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import ButtonNotification from './ButtonNotification';
import { Container, NotificationList, Notification, Scroll } from './styles';

import api from '../../services/api';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications],
  );

  useEffect(() => {
    async function loadingNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt },
        ),
      }));

      setNotifications(data);
    }

    loadingNotifications([]);
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function markNotificationAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification => {
        if (notification._id === id) {
          return { ...notification, read: true };
        }
        return notification;
      }),
    );
  }

  return (
    <Container>
      <ButtonNotification onClick={handleToggleVisible} hasUnread={hasUnread} />
      <NotificationList visible={visible}>
        <Scroll visible={visible}>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              <button
                onClick={() => markNotificationAsRead(notification._id)}
                type="button"
              >
                Marcar como lido
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
