import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/permission';

const initialState = {
  permissionList: null,
};

const getPermissionSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    permissionList: data.permissions,
  };
};

const permissionReducer = createReducer(initialState, {
  [Types.GET_PERMISSION_SUCCESS]: getPermissionSuccess,
});

export default permissionReducer;
