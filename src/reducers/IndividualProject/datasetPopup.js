import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/popup';

const initialState = {
  popupName: '',
  openDatasetPopup: false,
  addThemeData: {
    themeName: '',
  },
};

const openDatasetPopup = (state, action) => {
  const {
    payload: { value, name },
  } = action;
  return { ...state, openDatasetPopup: value, popupName: name };
};

const setAddThemeData = (state, action) => {
  const {
    payload: { name, value },
  } = action;
  const { addThemeData } = state;

  const newThemeData = {
    ...addThemeData,
    [name]: value,
  };

  return {
    ...state,
    addThemeData: newThemeData,
  };
};

const openDeletePopup = (state, action) => ({ ...state, deletePopup: action.payload });

const popupReducer = createReducer(initialState, {
  [Types.OPEN_DELETE_POPUP]: openDeletePopup,
  [Types.SET_ADD_THEME_DATA]: setAddThemeData,
  [Types.OPEN_DATASET_POPUP]: openDatasetPopup,
});

export default popupReducer;
