import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import { postRequestForDemo } from '@Services/landing';
import landingActions, { Types } from '@Actions/landing';
import withLoader from '@Utils/sagaUtils';

export function* postRequestForDemoRequest(action) {
  const { type, params } = action;
  try {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = yield call(postRequestForDemo, formData);
    yield put(landingActions.postRequestForDemoSuccess({ data: response.data }));
    yield put(toastActions.success({ message: 'Your data has been requested successfully' }));
    yield put(landingActions.clearData());
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(landingActions.postRequestForDemoFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* organizationWatcher() {
  yield takeLatest(Types.POST_REQUEST_FOR_DEMO_REQUEST, withLoader(postRequestForDemoRequest));
}

export default organizationWatcher;
