import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  file: null,
  layerId: null,
  taskId: null,
  taskResponse: null,
  taskLoading: false,
  templateList: null,
  addUploadData: {
    layerName: '',
    default: 'False',
    theme: '',
    themeId: '',
    group: '',
  },
};

const openLayerPopup = (state, action) => ({
  ...state,
  openLayerPopup: action.payload,
});

const setAddUploadDataFile = (state, action) => {
  const {
    payload: { value },
  } = action;
  const { layerData, addUploadData } = state;

  const layerNameFromFile = value?.name?.split('.')[0];
  const newAddUploadData = {
    ...addUploadData,
    layerName: layerNameFromFile,
  };

  return {
    ...state,
    file: value,
    addUploadData: newAddUploadData,
  };
};

const setAddUploadData = (state, action) => {
  const {
    payload: { name, value },
  } = action;
  const { addUploadData } = state;

  const newUploadData = {
    ...addUploadData,
    [name]: value,
  };

  return {
    ...state,
    addUploadData: newUploadData,
  };
};

const getLayerTemplateListSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    templateList: data,
  };
};

const getTaskResponseSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const taskLoading = data.message === 'Please wait result' || !data.layer_id;
  return {
    ...state,
    taskResponse: data.message,
    layerId: data.layer_id || null,
    // taskLoading: !data.layer_id,
    taskLoading,
  };
};

const postUploadDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    taskId: data.task_id,
    taskLoading: !!data.task_id,
  };
};

const deleteUploadDataFile = (state, action) => ({
  ...state,
  file: null,
});

const setTaskLoading = (state, action) => ({ ...state, taskLoading: action.payload });

const clearData = (state, action) => ({
  ...state,
  addUploadData: initialState?.addUploadData,
  file: null,
  taskId: null,
  taskResponse: null,
  taskLoading: false,
  layerId: null,
  // individualLayerData: null,
});

const layerPopup = createReducer(initialState, {
  [Types.OPEN_LAYER_POPUP]: openLayerPopup,
  [Types.GET_TASK_RESPONSE_SUCCESS]: getTaskResponseSuccess,
  [Types.GET_LAYER_TEMPLATE_LIST_SUCCESS]: getLayerTemplateListSuccess,
  [Types.POST_UPLOAD_DATA_SUCCESS]: postUploadDataSuccess,
  [Types.SET_ADD_UPLOAD_DATA_FILE]: setAddUploadDataFile,
  [Types.SET_ADD_UPLOAD_DATA]: setAddUploadData,
  [Types.DELETE_UPLOAD_DATA_FILE]: deleteUploadDataFile,
  [Types.SET_TASK_LOADING]: setTaskLoading,
  [Types.CLEAR_DATA]: clearData,
});

export default layerPopup;
