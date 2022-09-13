import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/signup';
import persist from '../utils/persist';

const initialState = {
  user: {},
};

const signupSuccess = (state, action) => ({ ...state, user: action.payload.data });

const signupReducer = createReducer(initialState, {
  [Types.SIGNUP_SUCCESS]: signupSuccess,
});

export default signupReducer;
