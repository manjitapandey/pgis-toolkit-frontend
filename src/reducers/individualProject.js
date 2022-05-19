/* eslint-disable no-nested-ternary */
import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';
import { isEmpty } from '@Utils/commonUtils';

const initialState = {
  active: 'map',
  layerFilterActive: 'map',
  mapToggle: false,
  opnLayerPopup: false,
  opnDatasetPopup: false,
  layerData: null,
  templateList: null,
  file: null,
  addUploadData: {
    layerName: '',
  },
  searchData: '',
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

const openDatasetPopup = (state, action) => ({
  ...state,
  openDatasetPopup: action.payload,
});

const getLayerTemplateListSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    templateList: data,
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
        : item.layer.length &&
          item.layer.map((layer) => {
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
          }),
  }));

  return {
    ...state,
    layerData,
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
  return {
    ...state,
    layerData: data,
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
                  // isSelected: element.options.some((datas) => datas.isSelected !== true),
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
  return {
    ...state,
    layerData: data,
  };
};

const setAddUploadDataFile = (state, action) => {
  const {
    payload: { value },
  } = action;
  let { addUploadData } = state;

  const layerNameFromFile = value?.name?.split('.')[0];
  if (value) {
    addUploadData = {
      ...addUploadData,
      layerName: layerNameFromFile,
    };
  }

  return {
    ...state,
    file: value,
    addUploadData,
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

const getSearchData = (state, action) => ({
  ...state,
  searchData: action.payload,
});

const individualProjectReducer = createReducer(initialState, {
  [Types.GET_PROJECT_LAYER_DATA_SUCCESS]: getProjectLayerDataSuccess,
  [Types.GET_LAYER_TEMPLATE_LIST_SUCCESS]: getLayerTemplateListSuccess,
  [Types.SET_ACTIVE]: setActive,
  [Types.SET_LAYER_FILTER_ACTIVE]: setLayerFilterActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
  [Types.OPEN_LAYER_POPUP]: openLayerPopup,
  [Types.OPEN_DATASET_POPUP]: openDatasetPopup,
  [Types.GET_SELECTED_FROM_LAYER]: getSelectedFromLayer,
  [Types.GET_SELECTED_FROM_SUB_LAYER]: getSelectedFromSubLayer,
  [Types.SET_ADD_UPLOAD_DATA_FILE]: setAddUploadDataFile,
  [Types.SET_ADD_UPLOAD_DATA]: setAddUploadData,
  [Types.GET_SEARCH_DATA]: getSearchData,
});

export default individualProjectReducer;
