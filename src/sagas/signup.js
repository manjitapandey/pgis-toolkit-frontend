import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { signupUser } from '@Services/signup';
import signupActions, { Types } from '@Actions/signup';
import toastActions from '@Actions/toast';
import withLoader from '@Utils/sagaUtils';

export function* signupRequest({ payload: data }) {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = yield call(signupUser, formData);
    // localStorage.setItem('refreshToken', response.data.refresh);
    // localStorage.setItem('userToken', response.data.access);
    yield put(signupActions.signupSuccess({ data: response.data }));
    yield put(toastActions.success({ message: 'Signed In successfully.' }));
    yield put(push('/login'));
  } catch (error) {
    // yield put(toastActions.error({ message: error?.response?.data?.message }));
    yield put(toastActions.error({ message: 'Unable to signup with provided credentials.' }));
  }
}

function* signupWatcher() {
  yield takeLatest(Types.SIGNUP_REQUEST, withLoader(signupRequest));
}

export default signupWatcher;
