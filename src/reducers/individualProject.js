/* eslint-disable no-nested-ternary */
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
  themeAddSuccess: false,
  popupName: '',
  layerDeleteSuccess: false,
  standardIcons: null,
  zoomToLayerId: null,
  isLayerLoading: false,
  themeList: null,
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
  return {
    ...state,
    themeList: data,
  };
};

// const getProjectThemeSuccess = (state, action) => {
//   const {
//     payload: { data, themeList, id },
//   } = action;
//   const newData = themeList.map((item) => (item.id === id ? { ...item, ...data } : { ...item }));
//   const layerData = newData?.map((item) => {
//     const newArrs = [...item?.group, ...item?.layer];
//     return {
//       id: item.id,
//       name: item.name,
//       options:
//         item.group.length > 0
//           ? newArrs.map((grp) => {
//               if (grp.layer) {
//                 return {
//                   // ...items,
//                   type: 'group',
//                   name: grp.name,
//                   id: grp.id,
//                   isSelected: false,
//                   options: grp.layer.map((elements) => ({
//                     ...elements,
//                     key: `${elements?.id}__${elements.name}__${grp?.id}`,
//                     isSelected: false,
//                   })),
//                 };
//               }
//               return {
//                 ...grp,
//                 key: `${item?.id}__${grp?.id}__${grp?.name}`,
//                 name: grp.name,
//                 id: grp.id,
//                 icon: grp.icon,
//                 iconSize: grp.icon_size,
//                 type: 'layerWithSubLayer',
//                 isSelected: false,
//                 options: grp.sub_layer.map((elements) => ({
//                   ...elements,
//                   key: `${elements?.id}__${elements.name}__${grp?.id}`,
//                   isSelected: false,
//                 })),
//               };
//             })
//           : item.layer.length
//           ? item.layer.map((layer) => {
//               if (item.sub_layer?.length) {
//                 return {
//                   // ...items,
//                   name: layer.name,
//                   id: layer.id,
//                   icon: layer.icon,
//                   iconSize: layer.icon_size,
//                   type: 'layerWithSubLayer',
//                   isSelected: false,
//                   options: layer.sub_layer.map((elements) => ({
//                     ...elements,
//                     isSelected: false,
//                     key: `${elements?.id}__${elements.name}__${layer?.id}`,
//                   })),
//                 };
//               }
//               return {
//                 // ...items,
//                 name: layer.name,
//                 id: layer.id,
//                 icon: layer.icon,
//                 iconSize: layer.icon_size,
//                 type: 'layerWithoutSubLayer',
//                 isSelected: false,
//                 options: layer.sub_layer.map((elements) => ({
//                   ...elements,
//                   isSelected: false,
//                   key: `${elements?.id}__${elements.name}__${layer?.id}`,
//                 })),
//               };
//             })
//           : [],
//     };
//   });
//   console.log(data, newData, layerData, 'project data');
//   return {
//     ...state,
//     projectTheme: data,
//   };
// };

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
    payload: { data },
  } = action;
  return {
    ...state,
    individualSubLayerData: data,
  };
};

const getProjectLayerDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const { updatedData } = state;
  const layerData = data.map((item) => {
    const newArrs = [...item.group, ...item.layer];
    return {
      id: item.id,
      name: item.name,
      options:
        item.group.length > 0
          ? newArrs.map((grp) => {
              if (grp.layer) {
                return {
                  // ...items,
                  type: 'group',
                  name: grp.name,
                  id: grp.id,
                  isSelected: false,
                  options: grp.layer.map((elements) => ({
                    ...elements,
                    key: `${elements?.id}__${elements.name}__${grp?.id}`,
                    isSelected: false,
                  })),
                };
              }
              return {
                ...grp,
                key: `${item?.id}__${grp?.id}__${grp?.name}`,
                name: grp.name,
                id: grp.id,
                icon: grp.icon,
                iconSize: grp.icon_size,
                type: 'layerWithSubLayer',
                isSelected: false,
                options: grp.sub_layer.map((elements) => ({
                  ...elements,
                  key: `${elements?.id}__${elements.name}__${grp?.id}`,
                  isSelected: false,
                })),
              };
            })
          : item.layer.length
          ? item.layer.map((layer) => {
              if (item.sub_layer?.length) {
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
                    key: `${elements?.id}__${elements.name}__${layer?.id}`,
                  })),
                };
              }
              return {
                // ...items,
                name: layer.name,
                id: layer.id,
                icon: layer.icon,
                iconSize: layer.icon_size,
                type: 'layerWithoutSubLayer',
                isSelected: false,
                options: layer.sub_layer.map((elements) => ({
                  ...elements,
                  isSelected: false,
                  key: `${elements?.id}__${elements.name}__${layer?.id}`,
                })),
              };
            })
          : [],
    };
  });

  const newLayerData = isEmpty(updatedData)
    ? layerData
    : layerData.map((item) =>
        item.id === updatedData?.themeId
          ? {
              ...item,
              options: item?.options?.map((elem) =>
                updatedData?.type === 'Group'
                  ? elem.id === updatedData?.group
                    ? {
                        ...elem,
                        isSelected: true,
                        options: elem.options.map((lyr) =>
                          lyr?.id === updatedData?.layerId ? { ...lyr, isSelected: true } : { ...lyr },
                        ),
                      }
                    : { ...elem }
                  : updatedData?.subId
                  ? elem?.id === updatedData?.layerId
                    ? {
                        ...elem,
                        isSelected: true,
                        options: elem.options.map((lyr) =>
                          lyr?.id === updatedData?.subId ? { ...lyr, isSelected: true } : { ...lyr },
                        ),
                      }
                    : { ...elem }
                  : elem?.id === updatedData?.layerId
                  ? { ...elem, isSelected: true }
                  : { ...elem },
              ),
            }
          : { ...item },
      );

  const geomData = getSelectedGeomData(newLayerData.filter((elem) => elem.id === updatedData?.themeId));
  return {
    ...state,
    layerData: newLayerData,
    layerDeleteSuccess: false,
    themeAddSuccess: false,
    addThemeData: initialState.addThemeData,
    postSuccess: false,
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
  const data = getSelectedDataFromSubLayer(layerData, name, categoryName, id);

  const finalData = data.map((item) => ({
    ...item,
    options: item.options.map((element) => ({
      ...element,
      isSelected: element.options.some((datas) => datas.isSelected === true),
    })),
  }));

  const geomData = getFilteredLayerData(finalData)?.map((elem) => ({
    ...elem,
    options: elem.options.filter((items) => items.isSelected === true),
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

const postLayerDataSuccess = (state, action) => {
  const {
    payload: { data, finalData, style },
  } = action;
  const geomData = state.geomData.map((element) =>
    element?.id === data.id
      ? {
          ...element,
          style,
        }
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
    elem.type === 'group' || elem?.sub_layer?.length
      ? { style: elem.options.filter((item) => item.id === id)[0].style }
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

const setZoomToLayerId = (state, action) => ({
  ...state,
  zoomToLayerId: action?.payload,
});

const setLayerLoading = (state, action) => ({ ...state, isLayerLoading: action.payload });

const setTaskLoading = (state, action) => ({ ...state, taskLoading: action.payload });

const setAddUpdatedData = (state, action) => ({
  ...state,
  updatedData: action.payload,
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
    layerId: null,
    // individualLayerData: null,
    selectedLayerStyle: {},
    selectedtype: '',
  });

const individualProjectReducer = createReducer(initialState, {
  [Types.GET_PROJECT_LAYER_DATA_SUCCESS]: getProjectLayerDataSuccess,
  [Types.GET_THEME_LIST_SUCCESS]: getThemeListSuccess,
  // [Types.GET_PROJECT_THEME_SUCCESS]: getProjectThemeSuccess,
  [Types.GET_INDIVIDUAL_PROJECT_DATA_SUCCESS]: getIndividualProjectDataSuccess,
  [Types.GET_INDIVIDUAL_LAYER_DATA_SUCCESS]: getIndividualLayerDataSuccess,
  [Types.GET_INDIVIDUAL_SUB_LAYER_DATA_SUCCESS]: getIndividualSubLayerDataSuccess,
  [Types.GET_STANDARD_ICONS_SUCCESS]: getStandardIconsSuccess,
  [Types.GET_TASK_RESPONSE_SUCCESS]: getTaskResponseSuccess,
  [Types.POST_UPLOAD_DATA_SUCCESS]: postUploadDataSuccess,
  [Types.POST_LAYER_DATA_SUCCESS]: postLayerDataSuccess,
  [Types.POST_SUB_LAYER_DATA_SUCCESS]: postSubLayerDataSuccess,
  // [Types.DELETE_LAYER_DATA_SUCCESS]: deleteLayerDataSuccess,
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
  [Types.SET_ZOOM_TO_LAYER_ID]: setZoomToLayerId,
  [Types.SET_LAYER_LOADING]: setLayerLoading,
  [Types.SET_TASK_LOADING]: setTaskLoading,
  [Types.SET_ADD_UPDATED_DATA]: setAddUpdatedData,
});

export default individualProjectReducer;
