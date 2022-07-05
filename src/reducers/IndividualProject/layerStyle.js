import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  groupList: null,
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

const layerStyleReducer = createReducer(initialState, {
  [Types.GET_GROUP_LIST_SUCCESS]: getGroupListSuccess,
});

export default layerStyleReducer;
