import { put, delay, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

// The '*' operator converts our function into a Generator function. This is new gen JS. In a generator function, we have to yield the result at each step, which makes sure that it will wait for the result at each step. Also, 'put', which is a part of REDUX SAGA, dispatches the action, which is passed to it.
export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], "token");
  yield call([localStorage, 'removeItem'], "expirationDate");
  yield call([localStorage, 'removeItem'], "userId");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };

  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTYvrtXWVucC_2B0ohqOzZrr3wpTOdNsE';

  if (!action.isSignup) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTYvrtXWVucC_2B0ohqOzZrr3wpTOdNsE';
  }

  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
};

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
    if (expirationDate > new Date()) {
      const userId = yield localStorage.getItem('userId');
      yield put(actions.authSuccess(token, userId));
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      yield put(actions.logout());
    }
  }
}