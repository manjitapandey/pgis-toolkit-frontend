import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import withLoader from '@Utils/sagaUtils';
import { getPermission } from '@Services/permission';
import permissionActions, { Types } from '@Actions/permission';

export function* getPermissionRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getPermission, params);
    yield put(permissionActions.getPermissionSuccess({ data: response.data }));
  } catch (error) {
    yield put(permissionActions.getPermissionFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* permissionWatcher() {
  yield takeLatest(Types.GET_PERMISSION_REQUEST, withLoader(getPermissionRequest));
}

export default permissionWatcher;
