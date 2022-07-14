import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  groupList: null,
  attributeAlias: null,
  activeTypeTab: 'Individual',
  layerIdHavingSubLayer: null,
  selectedData: '',
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

const getAttributeAliasSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    attributeAlias: data,
  };
};

const setAciveTypeTab = (state, action) => ({
  ...state,
  activeTypeTab: action.payload,
});

const setLayerIdHavingSubLayer = (state, action) => ({
  ...state,
  layerIdHavingSubLayer: action.payload,
});

const setSelectedData = (state, action) => ({
  ...state,
  selectedData: action.payload,
});

const clearLayerStyleData = (state, action) => ({
  ...state,
  layerIdHavingSubLayer: null,
  setSelectedData: initialState.setSelectedData,
  activeTypeTab: initialState.activeTypeTab,
  groupList: initialState.groupList,
  attributeAlias: initialState.attributeAlias,
});

const layerStyleReducer = createReducer(initialState, {
  [Types.GET_GROUP_LIST_SUCCESS]: getGroupListSuccess,
  [Types.GET_ATTRIBUTE_ALIAS_SUCCESS]: getAttributeAliasSuccess,
  [Types.SET_ACTIVE_TYPE_TAB]: setAciveTypeTab,
  [Types.SET_LAYER_ID_HAVING_SUB_LAYER]: setLayerIdHavingSubLayer,
  [Types.SET_SELECTED_DATA]: setSelectedData,
  [Types.CLEAR_LAYER_STYLE_DATA]: clearLayerStyleData,
});

export default layerStyleReducer;
