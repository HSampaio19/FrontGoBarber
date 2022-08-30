// eslint-disable-next-line object-curly-newline
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { singInSuccess, singFailure } from './actions';
import history from '../../../services/history';

// funcao de login de usuario
export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/session', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('usuario nao e prestador');
      yield put(singFailure());
      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(singFailure());
    toast.error('Usuario ou senha incorretos');
  }
}

// fFuncao de cadastro de novos usuarios
export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    yield put(singFailure());
    toast.error('Nao foi possivel realizar o seu cadastro. Tente novamente!');
  }
}

// Funcao que realiza a autenticacao a toda chamada realizada apos o login
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export function singOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SING_IN_REQUEST', singIn),
  takeLatest('@auth/SING_UP_REQUEST', singUp),
  takeLatest('@auth/SING_OUT', singOut),
]);
