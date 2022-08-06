import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

function SingUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Cadastrar</button>
        <Link to="/">Ja possuo cadastro</Link>
      </Form>
    </>
  );
}

export default SingUp;
