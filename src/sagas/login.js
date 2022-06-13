import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import loginUser from '@Services/login';
import loginActions, { Types } from '@Actions/login';
import toastActions from '@Actions/toast';
import withLoader from '@Utils/sagaUtils';

export function* loginRequest({ payload: data }) {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = yield call(loginUser, data);
    localStorage.setItem('refreshToken', response.data.refresh);
    localStorage.setItem('userToken', response.data.access);
    yield put(loginActions.loginSuccess({ data: response.data }));
    yield put(toastActions.success({ message: 'Logged In successfully.' }));
    yield put(push('/'));
  } catch (error) {
    // yield put(toastActions.error({ message: error?.response?.data?.message }));
    yield put(toastActions.error({ message: 'Unable to login with provided credentials.' }));
  }
}

function* logoutRequest() {
  try {
    localStorage.clear();
    yield put(push('/login'));
    // yield put(toastActions.success({ message: 'You logged out successfully.' }));
  } catch (error) {
    yield put(loginActions.logoutFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* loginWatcher() {
  yield takeLatest(Types.LOGIN_REQUEST, withLoader(loginRequest));
  yield takeLatest(Types.LOGOUT_REQUEST, logoutRequest);
}

export default loginWatcher;
