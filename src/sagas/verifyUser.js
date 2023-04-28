import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import withLoader from '@Utils/sagaUtils';
import { verifyUser } from '@Services/verifyUser';
import verifyActions, { Types } from '@Actions/verifyUser';

export function* getUserVerifiedDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(verifyUser, params);
    yield put(verifyActions.getUserVerifiedDataSuccess({ data: response.data }));
    if (response?.data?.user_created) {
      localStorage.clear();
      yield put(push('/login'));
    }
    if (!response?.data?.user_created) {
      yield put(push('/signup'));
    }
  } catch (error) {
    yield put(verifyActions.getUserVerifiedDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* verifyWatcher() {
  yield takeLatest(Types.GET_USER_VERIFIED_DATA_REQUEST, withLoader(getUserVerifiedDataRequest));
}

export default verifyWatcher;
