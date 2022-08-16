import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/images/Logo.png';
import { singUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo nome Obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('Campo e-mail obrigatorio'),
  password: Yup.string()
    .min(6, 'Sua senha deve conter ao menos 6 caracteres')
    .required('Campo senha obrigatorio'),
});

function SingUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(singUpRequest(name, email, password));
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
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
