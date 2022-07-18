import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import { getOrganizationData, postOrganizationData, deleteOrganization } from '@Services/organizations';
import organizationActions, { Types } from '@Actions/organizations';
import popupAction from '@Actions/popup';
import withLoader from '@Utils/sagaUtils';

export function* getOrganizationDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getOrganizationData, params);
    yield put(organizationActions.getOrganizationDataSuccess({ data: response.data }));
  } catch (error) {
    yield put(organizationActions.getOrganizationDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* postOrganizationDataRequest(action) {
  const {
    type,
    params,
    payload: { finalData },
  } = action;
  try {
    const formData = new FormData();
    Object.entries(finalData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = yield call(postOrganizationData, formData);
    yield put(organizationActions.postOrganizationDataSuccess({ data: response.data }));
    yield put(organizationActions.setLoading(false));
    yield put(popupAction.openPopup(false));
    yield put(organizationActions.clearOrganizationData());
  } catch (error) {
    yield put(organizationActions.postOrganizationDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* deleteOrganizationRequest({ payload }) {
  try {
    const { id, isDelete } = payload;
    const deleteData = {
      is_deleted: isDelete,
    };
    const data = new FormData();
    Object.entries(deleteData).forEach(([key, value]) => {
      data.append(key, value);
    });
    yield call(deleteOrganization, id, data);
    yield put(organizationActions.deleteOrganizationSuccess(id));
    yield put(toastActions.success({ message: 'Organization sucessfully deleted.' }));
    yield put(popupAction.openPopup(false));
    yield put(organizationActions.setLoading(false));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.Message }));
  }
}

function* organizationWatcher() {
  yield takeLatest(Types.GET_ORGANIZATION_DATA_REQUEST, withLoader(getOrganizationDataRequest));
  yield takeLatest(Types.POST_ORGANIZATION_DATA_REQUEST, withLoader(postOrganizationDataRequest));
  yield takeLatest(Types.DELETE_ORGANIZATION_REQUEST, withLoader(deleteOrganizationRequest));
}

export default organizationWatcher;
