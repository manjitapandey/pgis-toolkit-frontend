import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/popup';

const initialState = {
  popup: false,
};

const openPopup = (state, action) => ({ ...state, popup: action.payload });

const popupReducer = createReducer(initialState, {
  [Types.OPEN_POPUP]: openPopup,
});

export default popupReducer;
