import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import DefaultProfile from '../../assets/images/DefaultProfile.jpg';
import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Higor Sampaio</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={DefaultProfile} alt="Higor Sampaio" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
