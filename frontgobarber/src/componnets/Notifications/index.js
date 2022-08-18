import React from 'react';
import ButtonNotification from './ButtonNotification';
import { Container, NotificationList, StyledNotification } from './styles';

function Notifications() {
  return (
    <Container>
      <ButtonNotification hasUnread />
      <NotificationList>
        <StyledNotification unread>
          <p>Voce possui um agendamento</p>
          <time>Ha 2 dias</time>
          <button type="button">Marcar como lido</button>
        </StyledNotification>
        <StyledNotification unread>
          <p>Voce possui um agendamento</p>
          <time>Ha 2 dias</time>
          <button type="button">Marcar como lido</button>
        </StyledNotification>
        <StyledNotification unread>
          <p>Voce possui um agendamento</p>
          <time>Ha 2 dias</time>
          <button type="button">Marcar como lido</button>
        </StyledNotification>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
