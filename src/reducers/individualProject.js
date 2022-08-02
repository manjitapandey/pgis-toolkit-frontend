/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';
import { isEmpty } from '@Utils/commonUtils';
import { defaultStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';
import {
  getSelectedData,
  getSelectedDataFromSubLayer,
  getFilteredLayerData,
  getSelectedGeomData,
} from '@Utils/getSelectedData';

import { selectedItem } from '@src/constants/data';

const initialState = {
  active: 'map',
  layerFilterActive: 'map',
  mapToggle: false,
  individualProjectData: null,
  opnLayerPopup: false,
  opnDatasetPopup: false,
  layerData: null,
  individualLayerData: null,
  file: null,
  taskId: null,
  layerId: null,
  taskResponse: null,
  taskLoading: false,
  selectedLayerName: '',
  selectedLayerId: null,
  selectedType: '',
  themeId: null,
  geomData: [],
  addUploadData: {
    layerName: '',
    default: 'False',
    theme: '',
    themeId: '',
    group: '',
  },
  addThemeData: {
    themeName: '',
  },
  selectedLayerStyle: {},
  searchData: '',
  popupName: '',
  layerDeleteSuccess: false,
  standardIcons: null,
  zoomToLayerId: null,
  isLayerLoading: false,
  updatedData: {},
  postSuccess: false,
};

const setActive = (state, action) => ({ ...state, active: action.payload });

const setLayerFilterActive = (state, action) => ({ ...state, layerFilterActive: action.payload });

const handleMapToggle = (state, action) => ({
  ...state,
  mapToggle: action.payload,
});

const openLayerPopup = (state, action) => ({
  ...state,
  openLayerPopup: action.payload,
});

const openDatasetPopup = (state, action) => {
  const {
    payload: { value, name },
  } = action;
  return { ...state, openDatasetPopup: value, popupName: name };
};

const getThemeListSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const themeList = data.map((elem) => ({
    ...elem,
    options: [],
  }));
  return {
    ...state,
    layerData: themeList,
  };
};

const getProjectThemeSuccess = (state, action) => {
  const {
    payload: { data, id, type },
  } = action;
  const { updatedData, layerData } = state;
  const newData = layerData.map((ele) =>
    ele.id === id
      ? {
          ...ele,
          options: data.map((elem) =>
            elem.type === 'group'
              ? {
                  id: elem.id,
                  name: elem.name,
                  type: 'group',
                  isSelected: false,
                  options: elem.layer.map((item) => ({
                    ...item,
                    isSelected: false,
                    key: `${elem?.id}__${item?.name}__${item?.id}`,
                  })),
                }
              : elem?.sub_layer?.length
              ? {
                  // ...items,
                  name: elem?.name,
                  id: elem?.id,
                  icon: elem?.icon,
                  iconSize: elem?.icon_size,
                  type: 'layerWithSubLayer',
                  isSelected: false,
                  options: elem?.sub_layer?.map((elements) => ({
                    ...elements,
                    isSelected: false,
                    key: `${elements?.id}__${elements?.name}__${elem?.id}`,
                  })),
                }
              : { ...elem, isSelected: false, key: `${elem?.id}__${elem?.name}`, type: 'layerWithoutSubLayer' },
          ),
        }
      : { ...ele },
  );
  const newLayerData = isEmpty(updatedData) ? newData : selectedItem(newData, updatedData, type);
  return {
    ...state,
    layerData: newLayerData,
  };
};

const getIndividualProjectDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    individualProjectData: data,
  };
};

const getIndividualLayerDataSuccess = (state, action) => {
  const {
    payload: { data, geomData, layerData },
  } = action;
  return {
    ...state,
    individualLayerData: data,
    geomData,
    layerData,
  };
};

const getIndividualSubLayerDataSuccess = (state, action) => {
  const {
    payload: { data, geomData, layerData },
  } = action;
  return {
    ...state,
    individualSubLayerData: data,
    geomData,
  };
};

const getStandardIconsSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const standardIcons = data.map((element) => ({
    ...element,
    color: '#D82F38',
  }));
  return {
    ...state,
    standardIcons,
  };
};

const getSelectedFromLayer = (state, action) => {
  const {
    payload: { id, parentId, name, categoryName },
  } = action;
  const { layerData } = state;
  const data = getSelectedData(layerData, name, categoryName, id, defaultStyles);

  const geomData = getFilteredLayerData(data);
  const newGeomData = geomData?.map((elem) => ({ ...elem, options: elem?.options?.filter((item) => item.isSelected) }));
  return {
    ...state,
    layerData: data,
    geomData: newGeomData,
  };
};

const getSelectedFromSubLayer = (state, action) => {
  const {
    payload: { id, parentId, name, categoryName },
  } = action;
  const { layerData } = state;
  const data = getSelectedDataFromSubLayer(layerData, name, categoryName, id);

  const finalData = data.map((item) => ({
    ...item,
    options: item?.options?.map((element) => ({
      ...element,
      isSelected: element?.options?.some((datas) => datas.isSelected === true),
    })),
  }));

  const geomData = getFilteredLayerData(finalData)?.map((elem) => ({
    ...elem,
    options: elem?.options?.filter((items) => items.isSelected === true),
  }));

  return {
    ...state,
    layerData: finalData,
    geomData,
  };
};

const getTaskResponseSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const { layerData } = state;
  const newData =
    data?.message === 'successful' && data?.layer_id
      ? layerData?.map((elem) =>
          elem.id === data.theme
            ? {
                ...elem,
                options: [
                  {
                    id: data.layer_id,
                    name: data.name,
                    type: 'layerWithoutSubLayer',
                    isSelected: false,
                    icon: null,
                    style: { ...defaultStyles },
                  },
                  ...elem.options,
                ],
              }
            : { ...elem },
        )
      : layerData;
  const taskLoading = data.message === 'Please wait result' || !data.layer_id;
  return {
    ...state,
    taskResponse: data.message,
    layerId: data.layer_id || null,
    // taskLoading: !data.layer_id,
    taskLoading,
    layerData: newData,
  };
};

const postThemeDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const { layerData } = state;
  const newData = [{ id: data.id, name: data.name, description: null, options: [] }, ...layerData];
  return {
    ...state,
    layerData: newData,
    addThemeData: initialState.addThemeData,
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

const postLayerDataSuccess = (state, action) => {
  const {
    payload: { data, finalData, type, style },
  } = action;
  const geomData = state.geomData.map((element) =>
    element.type === 'group'
      ? { ...element, options: element.options.map((elem) => (elem.id === data.id ? { ...elem, style } : { ...elem })) }
      : element.id === data?.id
      ? { ...element, style }
      : { ...element },
  );

  const layerData = state.layerData.map((item) =>
    item?.id === data?.theme
      ? {
          ...item,
          options: item.options.map((elem) =>
            finalData?.group === elem?.id
              ? {
                  ...elem,
                  options: elem.options.map((element) =>
                    element.id === data?.id ? { ...element, name: finalData?.name } : { ...element },
                  ),
                }
              : elem.id === data?.id
              ? { ...elem, name: finalData?.name }
              : { ...elem },
          ),
        }
      : { ...item },
  );
  return {
    ...state,
    geomData,
    layerData,
    postSuccess: true,
  };
};

const postSubLayerDataSuccess = (state, action) => {
  const {
    payload: { id, style },
  } = action;
  // const { geomData } = state;
  const geomData = state.geomData.map((element) => ({
    ...element,
    options: element.options.map((item) => (item?.id === id ? { ...item, style } : { ...item })),
  }));
  return {
    ...state,
    geomData,
    postSuccess: true,
  };
};

const deleteLayerDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const { layerData, geomData } = state;
  const filteredData = layerData.map((elem) =>
    elem.id === data.theme
      ? {
          ...elem,
          options: data?.group
            ? elem?.options?.map((item) =>
                data?.group === item?.id
                  ? { ...item, options: item?.options?.filter((element) => element.id !== data?.id) }
                  : {
                      ...item,
                    },
              )
            : elem?.options?.filter((item) => item.id !== data?.id),
        }
      : { ...elem },
  );
  const newData = filteredData?.map((elem) =>
    elem?.id === data?.theme
      ? {
          ...elem,
          options: elem?.options?.map((item) => ({
            ...item,
            isSelected: item?.options?.some((datas) => datas?.isSelected === true),
          })),
        }
      : { ...elem },
  );
  const newGeomData = data?.group
    ? geomData
        .map((item) =>
          item.id === data.group
            ? { ...item, options: item.options.filter((elem) => elem.id !== data.id) }
            : { ...item },
        )
        .filter((element) => element?.options?.length)
    : geomData.filter((item) => item.id !== data.id);
  return {
    ...state,
    layerData: newData,
    geomData: newGeomData,
  };
};

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

const setAddThemeData = (state, action) => {
  const {
    payload: { name, value },
  } = action;
  const { addThemeData } = state;

  const newThemeData = {
    ...addThemeData,
    [name]: value,
  };

  return {
    ...state,
    addThemeData: newThemeData,
  };
};

const getSearchData = (state, action) => ({
  ...state,
  searchData: action.payload,
});

const handleStyleInput = (state, action) => {
  const {
    payload: { name, value },
  } = action;

  const selectedLayerStyle = {
    ...defaultStyles,
    ...state.selectedLayerStyle,
    [name]: value,
  };

  return {
    ...state,
    selectedLayerStyle,
  };
};

const setLayerDeleteData = (state, action) => {
  const {
    payload: { id, name },
  } = action;
  return {
    ...state,
    selectedLayerName: name,
    selectedLayerId: id,
  };
};

const setEditLayerData = (state, action) => {
  const {
    payload: { id, name, theId, type },
  } = action;
  const selectedLayerStyle = state.geomData.map((elem) =>
    elem.type === 'group' || elem?.type === 'layerWithSubLayer'
      ? { style: elem?.options?.filter((item) => item.id === id)[0]?.style }
      : elem.id === id && elem,
  )[0]?.style;
  return {
    ...state,
    selectedLayerName: name,
    selectedLayerId: id,
    themeId: theId,
    selectedLayerStyle,
    selectedType: type,
  };
};

const deleteUploadDataFile = (state, action) => ({
  ...state,
  file: null,
});

const setZoomToLayerId = (state, action) => ({
  ...state,
  zoomToLayerId: action?.payload,
});

const setLayerLoading = (state, action) => ({ ...state, isLayerLoading: action.payload });

const setTaskLoading = (state, action) => ({ ...state, taskLoading: action.payload });

const setAddUpdatedData = (state, action) => {
  const { layerData } = state;
  const newData = layerData
    .map((elem) => ({
      ...elem,
      options: elem.options
        ?.map((item) => ({ ...item, options: item?.options?.filter((element) => element.isSelected) }))
        ?.filter((data) => data.isSelected)
        ?.map((datas) => ({
          id: datas.id,
          name: datas.name,
          options: datas?.options?.map((items) => ({ id: items.id, name: items.name })),
        })),
    }))
    .filter((e) => e?.options?.length);

  // const latestData =
  //   action.payload.type === 'Individual' && action.payload.changedType === 'Group'
  //     ? newData.map((elem) => ({
  //         ...elem,
  //         options: elem?.options?.map((item) => ({ id: data?.group, options: [{ id: item?.id, name: item?.name }] })),
  //       }))
  //     : {};
  // console.log(action.payload, newData, latestData, 'payload');

  return {
    ...state,
    updatedData: { ...action.payload, detailData: newData },
  };
};

const clearData = (state, action) =>
  // const { addUploadData, addThemeData } = state;
  ({
    ...state,
    addUploadData: initialState?.addUploadData,
    file: null,
    taskId: null,
    taskResponse: null,
    taskLoading: false,
    addThemeData: initialState?.addThemeData,
    sameLayerName: false,
    selectedLayerId: null,
    selectedLayerName: '',
    themeId: null,
    layerId: null,
    // individualLayerData: null,
    selectedLayerStyle: {},
    selectedType: '',
  });

const individualProjectReducer = createReducer(initialState, {
  [Types.GET_THEME_LIST_SUCCESS]: getThemeListSuccess,
  [Types.GET_PROJECT_THEME_SUCCESS]: getProjectThemeSuccess,
  [Types.GET_INDIVIDUAL_PROJECT_DATA_SUCCESS]: getIndividualProjectDataSuccess,
  [Types.GET_INDIVIDUAL_LAYER_DATA_SUCCESS]: getIndividualLayerDataSuccess,
  [Types.GET_INDIVIDUAL_SUB_LAYER_DATA_SUCCESS]: getIndividualSubLayerDataSuccess,
  [Types.GET_STANDARD_ICONS_SUCCESS]: getStandardIconsSuccess,
  [Types.GET_TASK_RESPONSE_SUCCESS]: getTaskResponseSuccess,
  [Types.POST_UPLOAD_DATA_SUCCESS]: postUploadDataSuccess,
  [Types.POST_LAYER_DATA_SUCCESS]: postLayerDataSuccess,
  [Types.POST_SUB_LAYER_DATA_SUCCESS]: postSubLayerDataSuccess,
  [Types.POST_THEME_DATA_SUCCESS]: postThemeDataSuccess,
  [Types.DELETE_LAYER_DATA_SUCCESS]: deleteLayerDataSuccess,
  [Types.SET_ACTIVE]: setActive,
  [Types.SET_LAYER_FILTER_ACTIVE]: setLayerFilterActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
  [Types.OPEN_LAYER_POPUP]: openLayerPopup,
  [Types.OPEN_DATASET_POPUP]: openDatasetPopup,
  [Types.GET_SELECTED_FROM_LAYER]: getSelectedFromLayer,
  [Types.GET_SELECTED_FROM_SUB_LAYER]: getSelectedFromSubLayer,
  [Types.SET_ADD_UPLOAD_DATA_FILE]: setAddUploadDataFile,
  [Types.DELETE_UPLOAD_DATA_FILE]: deleteUploadDataFile,
  [Types.SET_ADD_UPLOAD_DATA]: setAddUploadData,
  [Types.SET_ADD_THEME_DATA]: setAddThemeData,
  [Types.SET_EDIT_LAYER_DATA]: setEditLayerData,
  [Types.GET_SEARCH_DATA]: getSearchData,
  [Types.CLEAR_DATA]: clearData,
  [Types.SET_LAYER_DELETE_DATA]: setLayerDeleteData,
  [Types.HANDLE_STYLE_INPUT]: handleStyleInput,
  [Types.SET_ZOOM_TO_LAYER_ID]: setZoomToLayerId,
  [Types.SET_LAYER_LOADING]: setLayerLoading,
  [Types.SET_TASK_LOADING]: setTaskLoading,
  [Types.SET_ADD_UPDATED_DATA]: setAddUpdatedData,
});

export default individualProjectReducer;
