import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import { setCsrf } from '@Services/common';
import commonActions, { Types } from '@Actions/common';
import withLoader from '@Utils/sagaUtils';

export function* setCsrfRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(setCsrf);
    yield put(commonActions.setCsrfSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(commonActions.setCsrfFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* setCsrfWatcher() {
  yield takeLatest(Types.SET_CSRF_REQUEST, withLoader(setCsrfRequest));
}

export default setCsrfWatcher;
