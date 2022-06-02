import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/projectHeader';

const initialState = {
  projectHeaderHeight: null,
};

const setHeaderHeight = (state, action) =>
  //   const {
  //     payload: { data },
  //   } = action;
  ({
    ...state,
    projectHeaderHeight: action.payload,
  });

const projectHeaderReducer = createReducer(initialState, {
  [Types.SET_HEADER_HEIGHT]: setHeaderHeight,
});

export default projectHeaderReducer;
