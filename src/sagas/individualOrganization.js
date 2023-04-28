import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import withLoader from '@Utils/sagaUtils';
import popupAction from '@Actions/popup';
import {
  getIndividualOrganizationData,
  getOrganizationDetailData,
  postProjectData,
  postProjectAdditionalData,
  getIndividualProjectData,
  deleteProjectData,
  getProjectCountryData,
  getProjectStateData,
} from '@Services/individualOrganization';
import individualActions, { Types } from '@Actions/individualOrganization';

export function* getIndividualOrganizationDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getIndividualOrganizationData, params);
    yield put(individualActions.getIndividualOrganizationDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.getIndividualOrganizationDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getIndividualProjectDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getIndividualProjectData, params);
    yield put(individualActions.getIndividualProjectDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.getIndividualProjectDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getOrganizationDetailDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getOrganizationDetailData, params);
    yield put(individualActions.getOrganizationDetailDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.getOrganizationDetailDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getProjectCountryDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getProjectCountryData, params);
    yield put(individualActions.getProjectCountryDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.getProjectCountryDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getProjectStateDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getProjectStateData, params);
    yield put(individualActions.getProjectStateDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.getProjectStateDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* postProjectDataRequest(action) {
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
    const response = yield call(postProjectData, formData);
    yield put(individualActions.setLoading(false));
    yield put(individualActions.clearProjectData());
    yield put(individualActions.openProjectPopup(false));
    yield put(individualActions.postProjectDataSuccess({ data: response.data, finalData }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.postProjectDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* postProjectAdditionalDataRequest(action) {
  const {
    type,
    params,
    payload: { id, finalData },
  } = action;
  try {
    const newFinalData = { ...finalData };
    Object.entries(newFinalData).forEach(([key, value]) => {
      if (value === null) delete newFinalData[key];
    });
    const formData = new FormData();
    Object.entries(newFinalData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = yield call(postProjectAdditionalData, id, formData);
    yield put(individualActions.setLoading(false));
    yield put(individualActions.postProjectAdditionalDataSuccess({ data: response.data, finalData }));
    yield put(toastActions.success({ message: 'Basic info for project edited successfully' }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(individualActions.postProjectAdditionalDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* deleteProjectDataRequest({ payload }) {
  try {
    const { id } = payload;
    const deleteData = {
      is_deleted: true,
    };
    const data = new FormData();
    Object.entries(deleteData).forEach(([key, value]) => {
      data.append(key, value);
    });
    yield call(deleteProjectData, id, data);
    yield put(individualActions.deleteProjectDataSuccess(id));
    yield put(toastActions.success({ message: 'Project sucessfully deleted.' }));
    yield put(popupAction.openPopup(false));
    yield put(individualActions.setLoading(false));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.detail }));
  }
}

function* individualOrganizatonWatcher() {
  yield takeLatest(Types.GET_INDIVIDUAL_ORGANIZATION_DATA_REQUEST, withLoader(getIndividualOrganizationDataRequest));
  yield takeLatest(Types.GET_INDIVIDUAL_PROJECT_DATA_REQUEST, withLoader(getIndividualProjectDataRequest));
  yield takeLatest(Types.GET_ORGANIZATION_DETAIL_DATA_REQUEST, withLoader(getOrganizationDetailDataRequest));
  yield takeLatest(Types.GET_PROJECT_COUNTRY_DATA_REQUEST, withLoader(getProjectCountryDataRequest));
  yield takeLatest(Types.GET_PROJECT_STATE_DATA_REQUEST, withLoader(getProjectStateDataRequest));
  yield takeLatest(Types.POST_PROJECT_DATA_REQUEST, withLoader(postProjectDataRequest));
  yield takeLatest(Types.POST_PROJECT_ADDITIONAL_DATA_REQUEST, withLoader(postProjectAdditionalDataRequest));
  yield takeLatest(Types.DELETE_PROJECT_DATA_REQUEST, withLoader(deleteProjectDataRequest));
}

export default individualOrganizatonWatcher;
