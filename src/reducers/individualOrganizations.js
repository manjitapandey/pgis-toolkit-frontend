import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualOrganizations';

const initialState = {
  active: 'map',
  mapToggle: false,
  openProjectPopup: false,
};

const setActive = (state, action) => ({ ...state, active: action.payload });

const handleMapToggle = (state, action) => ({
  ...state,
  mapToggle: action.payload,
});

const openProjectPopup = (state, action) => ({
  ...state,
  openProjectPopup: action.payload,
});

const individualOrganizationsReducer = createReducer(initialState, {
  [Types.SET_ACTIVE]: setActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
  [Types.OPEN_PROJECT_POPUP]: openProjectPopup,
});

export default individualOrganizationsReducer;
