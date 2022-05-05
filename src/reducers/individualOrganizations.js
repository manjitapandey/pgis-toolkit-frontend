import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualOrganizations';

const initialState = {
  active: 'map',
  mapToggle: false,
};

const setActive = (state, action) => ({ ...state, active: action.payload });

const handleMapToggle = (state, action) => ({
  ...state,
  mapToggle: action.payload,
});

const individualOrganizationsReducer = createReducer(initialState, {
  [Types.SET_ACTIVE]: setActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
});

export default individualOrganizationsReducer;
