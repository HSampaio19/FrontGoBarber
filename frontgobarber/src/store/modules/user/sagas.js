// eslint-disable-next-line object-curly-newline
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { singInSuccess } from './actions';
import history from '../../../services/history';

export function* singIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/session', { email, password });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('usuario nao e prestador');
    return;
  }

  yield put(singInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SING_IN_REQUEST', singIn)]);
