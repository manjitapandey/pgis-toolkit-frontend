import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import {
  getProjectLayerData,
  getLayerTemplateList,
  postUploadData,
  postThemeData,
  getTaskResponse,
  deleteLayerData,
} from '@Services/individualProject';
import withLoader from '@Utils/sagaUtils';
import popupAction from '@Actions/popup';
import projectActions, { Types } from '@Actions/individualProject';

export function* getProjectLayerDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getProjectLayerData, params);
    yield put(projectActions.getProjectLayerDataSuccess({ data: response.data }));
    yield put(projectActions.openLayerPopup(false));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getProjectLayerDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getLayerTemplateListRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getLayerTemplateList, params);
    yield put(projectActions.getLayerTemplateListSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getLayerTemplateListFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getTaskResponseRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getTaskResponse, params);
    yield put(projectActions.getTaskResponseSuccess({ data: response.data }));
    yield put(projectActions.openLayerPopup(false));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getTaskResponseFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* postUploadDataRequest(action) {
  const {
    type,
    params,
    payload: { finalUploadData },
  } = action;
  try {
    const formData = new FormData();
    Object.entries(finalUploadData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = yield call(postUploadData, formData);
    yield put(projectActions.postUploadDataSuccess({ data: response.data }));
    // yield put(toastActions.success({ message: 'Layer added successfully' }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.postUploadDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* postThemeDataRequest(action) {
  const {
    type,
    params,
    payload: { finalThemeData },
  } = action;
  try {
    const formData = new FormData();
    Object.entries(finalThemeData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = yield call(postThemeData, formData);
    yield put(projectActions.postThemeDataSuccess({ data: response.data }));
    yield put(projectActions.setThemeAddSuccess(true));
    yield put(projectActions.openDatasetPopup(false));
    // yield put(toastActions.success({ message: 'Layer added successfully' }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.postThemeDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* deleteLayerDataRequest({ payload }) {
  try {
    const { id, isDelete } = payload;
    const data = {
      is_deleted: isDelete,
    };
    yield call(deleteLayerData, id, data);
    yield put(projectActions.deleteLayerDataSuccess(id));
    yield put(popupAction.openDeletePopup(false));
    yield put(toastActions.success({ message: 'Layer data sucessfully deleted.' }));
  } catch (error) {
    yield put(toastActions.error({ message: 'Something went wrong!' }));
  }
}

function* individualProjectWatcher() {
  yield takeLatest(Types.GET_PROJECT_LAYER_DATA_REQUEST, withLoader(getProjectLayerDataRequest));
  yield takeLatest(Types.GET_LAYER_TEMPLATE_LIST_REQUEST, withLoader(getLayerTemplateListRequest));
  yield takeLatest(Types.GET_TASK_RESPONSE_REQUEST, withLoader(getTaskResponseRequest));
  yield takeLatest(Types.POST_UPLOAD_DATA_REQUEST, withLoader(postUploadDataRequest));
  yield takeLatest(Types.POST_THEME_DATA_REQUEST, withLoader(postThemeDataRequest));
  yield takeLatest(Types.DELETE_LAYER_DATA_REQUEST, withLoader(deleteLayerDataRequest));
}

export default individualProjectWatcher;
