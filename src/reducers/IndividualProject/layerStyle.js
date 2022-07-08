import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  groupList: null,
  attributeAlias: null,
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
  console.log(data, 'datas reducer');
  return {
    ...state,
    attributeAlias: data,
  };
};

const layerStyleReducer = createReducer(initialState, {
  [Types.GET_GROUP_LIST_SUCCESS]: getGroupListSuccess,
  [Types.GET_ATTRIBUTE_ALIAS_SUCCESS]: getAttributeAliasSuccess,
});

export default layerStyleReducer;
