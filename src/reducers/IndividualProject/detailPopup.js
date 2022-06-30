import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  detailPopup: false,
};

const openDetailPopup = (state, action) => ({ ...state, detailPopup: action.payload });

const detailPopupReducer = createReducer(initialState, {
  [Types.OPEN_DETAIL_POPUP]: openDetailPopup,
});

export default detailPopupReducer;
