import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import loaderActions from '@Actions/loader.actions';
import { getIndividualOrganizationData } from '@Services/individualOrganization';
import individualActions, { Types } from '@Actions/individualOrganization';

export function* getIndividualOrganizationDataRequest(action) {
  const { type, params } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
        },
      }),
    );

    const response = yield call(getIndividualOrganizationData, params);
    yield put(individualActions.getIndividualOrganizationDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.getIndividualOrganizationDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

function* individualOrganizatonWatcher() {
  yield takeLatest(Types.GET_INDIVIDUAL_ORGANIZATION_DATA_REQUEST, getIndividualOrganizationDataRequest);
}

export default individualOrganizatonWatcher;
