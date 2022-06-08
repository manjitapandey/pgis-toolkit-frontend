/* eslint-disable no-nested-ternary */
import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';
import { isEmpty } from '@Utils/commonUtils';
import { defaultStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';

const initialState = {
  active: 'map',
  layerFilterActive: 'map',
  mapToggle: false,
  opnLayerPopup: false,
  opnDatasetPopup: false,
  layerData: null,
  individualLayerData: null,
  templateList: null,
  file: null,
  taskId: null,
  layerId: null,
  taskResponse: null,
  taskLoading: false,
  selectedLayerName: '',
  selectedLayerId: null,
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
  themeAddSuccess: false,
  groupList: null,
  popupName: '',
  mapIcon: null,
  layerDeleteSuccess: false,
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

const getLayerTemplateListSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    templateList: data,
  };
};

const getIndividualLayerDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;

  return {
    ...state,
    individualLayerData: data,
  };
};

const getProjectLayerDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const layerData = data.map((item) => ({
    id: item.id,
    name: item.name,
    options:
      item.group.length > 0
        ? [
            item.group
              .map((grp) => ({
                // ...items,
                type: 'group',
                name: grp.name,
                id: grp.id,
                isSelected: false,
                options: grp.layer.map((elements) => ({
                  ...elements,
                  isSelected: false,
                })),
              }))
              .reduce((arr, items) => ({ ...arr, ...items }), {}),
            item.layer
              .map((layers) => ({
                ...layers,
                name: layers.name,
                id: layers.id,
                icon: layers.icon,
                iconSize: layers.icon_size,
                type: 'layerWithSubLayer',
                isSelected: false,
                options: layers.sub_layer.map((elements) => ({
                  ...elements,
                  isSelected: false,
                })),
              }))
              .reduce((arr, items) => ({ ...arr, ...items }), {}),
          ].filter((elementss) => !isEmpty(elementss))
        : item.layer.length
        ? item.layer.map((layer) => {
            if (item.sub_layer) {
              return {
                // ...items,
                name: layer.name,
                id: layer.id,
                icon: layer.icon,
                iconSize: layer.icon_size,
                type: 'layerWithSubLayer',
                isSelected: false,
                options: layer.sub_layer.map((elements) => ({
                  ...elements,
                  isSelected: false,
                })),
              };
            }
            return {
              // ...items,
              name: layer.name,
              id: layer.id,
              icon: layer.icon,
              iconSize: layer.icon_size,
              type: 'layerWithSubLayer',
              isSelected: false,
              options: layer.sub_layer.map((elements) => ({
                ...elements,
                isSelected: false,
              })),
            };
          })
        : [],
  }));

  return {
    ...state,
    layerData,
    layerDeleteSuccess: false,
    themeAddSuccess: false,
    addThemeData: initialState.addThemeData,
  };
};

const getGroupListSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    groupList: data,
  };
};

const getSelectedFromLayer = (state, action) => {
  const {
    payload: { id, parentId, name, categoryName },
  } = action;

  const { layerData } = state;
  const data = layerData.map((item) =>
    item.name === name
      ? {
          ...item,
          options: item.options.map((element) =>
            element.name === categoryName
              ? {
                  ...element,
                  options: element.options.map((items) => ({
                    ...items,
                    isSelected: !element.isSelected,
                  })),
                  isSelected: !element.isSelected,
                }
              : { ...element },
          ),
        }
      : { ...item },
  );
  const geomData = data
    .map((lyr) => ({
      options: lyr.options.filter((item) => item.isSelected === true),
    }))
    .filter((element) => element.options.length)
    .reduce((arr, items) => [...arr, ...items.options], []);

  // const geomData = data
  //   ?.reduce((arr, item) => [...arr, item.options.filter((element) => element.isSelected === true)], [])
  //   ?.filter((element) => element.length)[0];

  return {
    ...state,
    layerData: data,
    geomData,
  };
};

const getSelectedFromSubLayer = (state, action) => {
  const {
    payload: { id, parentId, name, categoryName },
  } = action;
  const { layerData } = state;
  const data = layerData.map((item) =>
    item.name === name
      ? {
          ...item,
          options: item.options.map((element) =>
            element.name === categoryName
              ? {
                  ...element,
                  // isSelected: element.options.some((datas) => datas.isSelected === true),
                  options: element.options.map((items) =>
                    items.id === +id
                      ? {
                          ...items,
                          isSelected: !items.isSelected,
                        }
                      : { ...items },
                  ),
                }
              : { ...element },
          ),
        }
      : { ...item },
  );
  const finalData = data.map((item) => ({
    ...item,
    options: item.options.map((element) => ({
      ...element,
      isSelected: element.options.some((datas) => datas.isSelected === true),
    })),
  }));
  return {
    ...state,
    layerData: finalData,
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

  // const newData = state.layerData.map((item) =>
  //   item.id === state.themeId
  //     ? {
  //         ...item,
  //         options: item.options.map((element) =>
  //           element.id === state.selectedLayerId ? { ...element, style: selectedLayerStyle } : { ...element },
  //         ),
  //       }
  //     : { ...item },
  // );

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
    payload: { id, name, theId },
  } = action;
  return {
    ...state,
    selectedLayerName: name,
    selectedLayerId: id,
    themeId: theId,
  };
};

const deleteLayerDataSuccess = (state, action) => {
  const { layerData } = state;
  return {
    ...state,
    // layerData: state.layerData.filter((item) => item.id !== action.payload),
  };
};

const setThemeAddSuccess = (state, action) => ({
  ...state,
  themeAddSuccess: action.payload,
});

const setLayerDeleteSuccess = (state, action) => ({
  ...state,
  layerDeleteSuccess: action.payload,
});

const deleteUploadDataFile = (state, action) => ({
  ...state,
  file: null,
});

const setMapIcon = (state, action) => ({
  ...state,
  mapIcon: action.payload,
});

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
    mapIcon: null,
    layerId: null,
    individualLayerData: null,
  });

const individualProjectReducer = createReducer(initialState, {
  [Types.GET_PROJECT_LAYER_DATA_SUCCESS]: getProjectLayerDataSuccess,
  [Types.GET_INDIVIDUAL_LAYER_DATA_SUCCESS]: getIndividualLayerDataSuccess,
  [Types.GET_LAYER_TEMPLATE_LIST_SUCCESS]: getLayerTemplateListSuccess,
  [Types.GET_GROUP_LIST_SUCCESS]: getGroupListSuccess,
  [Types.GET_TASK_RESPONSE_SUCCESS]: getTaskResponseSuccess,
  [Types.POST_UPLOAD_DATA_SUCCESS]: postUploadDataSuccess,
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
  [Types.SET_THEME_ADD_SUCCESS]: setThemeAddSuccess,
  [Types.SET_LAYER_DELETE_SUCCESS]: setLayerDeleteSuccess,
  [Types.HANDLE_STYLE_INPUT]: handleStyleInput,
  [Types.SET_MAP_ICON]: setMapIcon,
});

export default individualProjectReducer;
