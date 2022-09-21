import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import withLoader from '@Utils/sagaUtils';
import {
  organizationData,
  organizationUsersData,
  deleteUserData,
  editUserData,
  individualUserData,
} from '@Services/users';
import verifyActions, { Types } from '@Actions/users';

export function* getOrganizationDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(organizationData, params);
    yield put(verifyActions.getOrganizationDataSuccess({ data: response.data }));
  } catch (error) {
    yield put(verifyActions.getOrganizationDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getOrganizationUsersDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(organizationUsersData, params);
    yield put(verifyActions.getOrganizationUsersDataSuccess({ data: response.data, id: params.organization }));
  } catch (error) {
    yield put(verifyActions.getOrganizationUsersDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getIndividualUserDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(individualUserData, params);
    yield put(verifyActions.getIndividualUserDataSuccess({ data: response.data }));
  } catch (error) {
    yield put(verifyActions.getIndividualUserDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* editUserDataRequest({ payload }) {
  try {
    const { id, finalData } = payload;

    const data = new FormData();
    Object.entries(finalData).forEach(([key, value]) => {
      data.append(key, value);
    });
    yield call(editUserData, id, data);
    yield put(verifyActions.editUserDataSuccess(id));
    yield put(toastActions.success({ message: 'User data edited sucessfully.' }));
    yield put(verifyActions.openUserPopup({ popup: false, type: '' }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.detail }));
  }
}

export function* deleteUserDataRequest({ payload }) {
  try {
    const { id } = payload;
    const deleteData = {
      is_deleted: true,
    };
    const data = new FormData();
    Object.entries(deleteData).forEach(([key, value]) => {
      data.append(key, value);
    });
    yield call(deleteUserData, id, data);
    yield put(verifyActions.deleteUserDataSuccess(id));
    yield put(toastActions.success({ message: 'User sucessfully deleted.' }));
    yield put(verifyActions.openUserPopup({ popup: false, type: '' }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.detail }));
  }
}

function* usersWatcher() {
  yield takeLatest(Types.GET_ORGANIZATION_DATA_REQUEST, withLoader(getOrganizationDataRequest));
  yield takeLatest(Types.GET_ORGANIZATION_USERS_DATA_REQUEST, withLoader(getOrganizationUsersDataRequest));
  yield takeLatest(Types.GET_INDIVIDUAL_USER_DATA_REQUEST, withLoader(getIndividualUserDataRequest));
  yield takeLatest(Types.DELETE_USER_DATA_REQUEST, withLoader(deleteUserDataRequest));
  yield takeLatest(Types.EDIT_USER_DATA_REQUEST, withLoader(editUserDataRequest));
}

export default usersWatcher;
