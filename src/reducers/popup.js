import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/popup';

const initialState = {
  popup: false,
  deletePopup: false,
  popupType: 'Add',
};

const openPopup = (state, action) => ({ ...state, popup: action.payload });

const openDeletePopup = (state, action) => ({ ...state, deletePopup: action.payload });

const setPopupType = (state, action) => ({ ...state, popupType: action.payload });

const popupReducer = createReducer(initialState, {
  [Types.OPEN_POPUP]: openPopup,
  [Types.OPEN_DELETE_POPUP]: openDeletePopup,
  [Types.SET_POPUP_TYPE]: setPopupType,
});

export default popupReducer;
