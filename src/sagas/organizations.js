import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import { getOrganizationData } from '@Services/organizations';
import organizationActions, { Types } from '@Actions/organizations';
import withLoader from '@Utils/sagaUtils';

export function* getOrganizationDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getOrganizationData, params);
    yield put(organizationActions.getOrganizationDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(organizationActions.getOrganizationDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* organizationWatcher() {
  yield takeLatest(Types.GET_ORGANIZATION_DATA_REQUEST, withLoader(getOrganizationDataRequest));
}

export default organizationWatcher;
