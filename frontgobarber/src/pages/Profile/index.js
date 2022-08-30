import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { singOut } from '../../store/modules/auth/actions';

import Container from './styles';
import AvatarInput from './AvatarInput/AvatarInput';

function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSingOut() {
    dispatch(singOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Email" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha Atual" />
        <Input type="password" name="password" placeholder="Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmacao de Senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button onClick={handleSingOut} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}

export default Profile;
