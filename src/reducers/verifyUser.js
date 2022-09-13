import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/verifyUser';

const initialState = {
  userData: null,
  emailVerificationToken: '',
};

const getUserVerifiedDataRequest = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    userData: data,
  };
};

const setToken = (state, action) => ({
  ...state,
  emailVerificationToken: action.payload,
});

const verifyUserReducer = createReducer(initialState, {
  [Types.GET_USER_VERIFIED_DATA_SUCCESS]: getUserVerifiedDataRequest,
  [Types.SET_TOKEN]: setToken,
});

export default verifyUserReducer;
