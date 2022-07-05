/* eslint-disable no-nested-ternary */
import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import {
  getProjectLayerData,
  getLayerTemplateList,
  getGroupList,
  postGroupData,
  postUploadData,
  postThemeData,
  getTaskResponse,
  deleteLayerData,
  postLayerData,
  getIndividualLayerData,
  getStandardIcons,
  getIndividualProjectData,
  getFeatureCollection,
} from '@Services/individualProject';
import withLoader from '@Utils/sagaUtils';
import popupAction from '@Actions/popup';
import projectActions, { Types } from '@Actions/individualProject';
import { getSelectedData } from '@Utils/getSelectedData';

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

export function* getIndividualProjectDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getIndividualProjectData, params);
    yield put(projectActions.getIndividualProjectDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getIndividualProjectDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getIndividualLayerDataRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getIndividualLayerData, params.id);
    const layerData = params.layerData.map((elem) =>
      elem.id === response.data.theme
        ? {
            ...elem,
            options: elem.options.map((item) =>
              item.type === 'group'
                ? {
                    ...item,
                    options: item.options.map((items) =>
                      items.id === response.data.id
                        ? {
                            ...items,
                            bbox: response.data.bbox,
                            style: {
                              ...response?.data?.style,
                              icon: { url: response?.data?.icon },
                              icon_size: response?.data?.icon_size,
                            },
                          }
                        : { ...items },
                    ),
                  }
                : item?.id === response?.data?.id
                ? {
                    ...item,
                    bbox: response.data.bbox,
                    style: {
                      ...response?.data?.style,
                      icon: { url: response?.data?.icon || response?.data?.std_icon },
                      icon_size: response?.data?.icon_size,
                    },
                  }
                : { ...item },
            ),
          }
        : { ...elem },
    );
    const geomData = layerData
      ?.map((lyr) => ({
        options: lyr.options.filter((item) => item.isSelected === true),
      }))
      ?.filter((element) => element?.options?.length)
      ?.reduce((arr, items) => [...arr, ...items?.options], []);
    yield put(projectActions.getIndividualLayerDataSuccess({ data: response.data, geomData, layerData }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getIndividualLayerDataFailure());
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
    // yield put(projectActions.openLayerPopup(false));
    // yield put(projectActions.clearData());
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getTaskResponseFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getGroupListRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getGroupList, params);
    yield put(projectActions.getGroupListSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getGroupListFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getStandardIconsRequest(action) {
  const { type, params } = action;
  try {
    const response = yield call(getStandardIcons);
    yield put(projectActions.getStandardIconsSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getStandardIconsFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* getFeatureCollectionRequest(action) {
  const { type, params } = action;
  console.log(params, 'params');
  try {
    const response = yield call(getFeatureCollection, params);
    yield put(projectActions.getFeatureCollectionSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getFeatureCollectionFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

export function* postGroupDataRequest(action) {
  const {
    type,
    params,
    payload: { finalGroupData },
  } = action;
  try {
    const formData = new FormData();
    Object.entries(finalGroupData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = yield call(postGroupData, formData);
    yield put(projectActions.postGroupDataSuccess({ data: response.data }));
    yield put(projectActions.openDatasetPopup({ value: false, name: '' }));
    // yield put(toastActions.success({ message: 'Layer added successfully' }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.postGroupDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.Message }));
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
    yield put(projectActions.openDatasetPopup({ value: false, name: '' }));
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

export function* postLayerDataRequest({ payload }) {
  try {
    const { id, finalData } = payload;
    const data = new FormData();
    Object.entries(finalData).forEach(([key, value]) => {
      data.append(key, value);
    });
    yield call(postLayerData, id, data);
    yield put(projectActions.postLayerDataSuccess({ id, style: JSON.parse(finalData.style) }));
    yield put(toastActions.success({ message: 'Layer style successfully edited.' }));
    yield put(projectActions.setLayerFilterActive('map'));
    yield put(projectActions.setLayerDeleteData({ id: null }));
  } catch (error) {
    yield put(projectActions.postLayerDataFailure());
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
    yield put(projectActions.setLayerDeleteSuccess(true));
    yield put(toastActions.success({ message: 'Layer data sucessfully deleted.' }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.Message }));
  }
}

function* individualProjectWatcher() {
  yield takeLatest(Types.GET_PROJECT_LAYER_DATA_REQUEST, withLoader(getProjectLayerDataRequest));
  yield takeLatest(Types.GET_INDIVIDUAL_PROJECT_DATA_REQUEST, withLoader(getIndividualProjectDataRequest));
  yield takeLatest(Types.GET_INDIVIDUAL_LAYER_DATA_REQUEST, withLoader(getIndividualLayerDataRequest));
  yield takeLatest(Types.GET_LAYER_TEMPLATE_LIST_REQUEST, withLoader(getLayerTemplateListRequest));
  yield takeLatest(Types.GET_TASK_RESPONSE_REQUEST, withLoader(getTaskResponseRequest));
  yield takeLatest(Types.GET_GROUP_LIST_REQUEST, withLoader(getGroupListRequest));
  yield takeLatest(Types.GET_FEATURE_COLLECTION_REQUEST, withLoader(getFeatureCollectionRequest));
  yield takeLatest(Types.GET_STANDARD_ICONS_REQUEST, withLoader(getStandardIconsRequest));
  yield takeLatest(Types.POST_GROUP_DATA_REQUEST, withLoader(postGroupDataRequest));
  yield takeLatest(Types.POST_UPLOAD_DATA_REQUEST, withLoader(postUploadDataRequest));
  yield takeLatest(Types.POST_LAYER_DATA_REQUEST, withLoader(postLayerDataRequest));
  yield takeLatest(Types.POST_THEME_DATA_REQUEST, withLoader(postThemeDataRequest));
  yield takeLatest(Types.DELETE_LAYER_DATA_REQUEST, withLoader(deleteLayerDataRequest));
}

export default individualProjectWatcher;
