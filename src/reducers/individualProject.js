import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  active: 'map',
  mapToggle: false,
  opnLayerPopup: false,
  opnDatasetPopup: false,
  layerData: null,
};

const setActive = (state, action) => ({ ...state, active: action.payload });

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

const getProjectLayerDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  console.log(data, 'data');
  const datass = data.map((item) => item.layer.find((elementsss) => elementsss.sub_layer.length > 0));

  const layerData = data.map((item) => ({
    id: item.id,
    name: item.name,
    hasSubLayer: !!(item.group.length || item.layer[0].sub_layer.length),
    options:
      item.group.length || item.layer[0].sub_layer.length
        ? [
            item.group.length &&
              item.group
                .map((items) => ({
                  // ...items,
                  type: 'group',
                  name: items.name,
                  id: items.id,
                  isSelected: false,
                  options: items.layer.map((elements) => ({
                    ...elements,
                    isSelected: false,
                  })),
                }))
                .reduce((arr, datas) => ({ ...arr, ...datas }), {}),
            item.layer
              .map((items) => ({
                // ...items,
                name: items.name,
                id: items.id,
                icon: items.icon,
                iconSize: items.icon_size,
                type: 'layerWithSubLayer',
                isSelected: false,
                options: items.sub_layer.map((elements) => ({
                  ...elements,
                  isSelected: false,
                })),
              }))
              .reduce((arr, datas) => ({ ...arr, ...datas }), {}),
          ].filter((itemsss) => typeof itemsss === 'object')
        : item.layer.map((element) => ({
            ...element,
            isSelected: false,
          })),
  }));
  console.log(datass, 'sss');
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
  // console.log(data, 'data');
  return {
    ...state,
    layerData: data,
  };
};

const getSelectedFromSubLayer = (state, action) => {
  const { layerData } = state;
  return {
    ...state,
  };
};

const individualProjectReducer = createReducer(initialState, {
  [Types.GET_PROJECT_LAYER_DATA_SUCCESS]: getProjectLayerDataSuccess,
  [Types.SET_ACTIVE]: setActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
  [Types.OPEN_LAYER_POPUP]: openLayerPopup,
  [Types.OPEN_DATASET_POPUP]: openDatasetPopup,
  [Types.GET_SELECTED_FROM_LAYER]: getSelectedFromLayer,
  [Types.GET_SELECTED_FROM_SUB_LAYER]: getSelectedFromSubLayer,
});

export default individualProjectReducer;
