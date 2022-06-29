import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/landing';

const initialState = {
  addRequestData: {
    full_name: '',
    email: '',
    phone: '',
    organization_name: '',
    marketing_communications: false,
  },
};

const setAddRequestData = (state, action) => {
  const {
    payload: { name, value },
  } = action;

  const { addRequestData } = state;

  const newRequestData = {
    ...addRequestData,
    [name]: value,
  };
  return { ...state, addRequestData: newRequestData };
};

const clearData = (state, action) => ({
  ...state,
  addRequestData: initialState.addRequestData,
});

const landingReducer = createReducer(initialState, {
  [Types.SET_ADD_REQUEST_DATA]: setAddRequestData,
  [Types.CLEAR_DATA]: clearData,
});

export default landingReducer;
