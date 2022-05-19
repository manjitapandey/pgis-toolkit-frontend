import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualOrganization';

const initialState = {
  active: 'map',
  mapToggle: false,
  openProjectPopup: false,
  individualOrganizationData: null,
  organizationData: null,
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

const getIndividualOrganizationDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    individualOrganizationData: data.results,
  };
};

const getOrganizationDetailDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    organizationData: data,
  };
};

const individualOrganizationsReducer = createReducer(initialState, {
  [Types.SET_ACTIVE]: setActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
  [Types.OPEN_PROJECT_POPUP]: openProjectPopup,
  [Types.GET_INDIVIDUAL_ORGANIZATION_DATA_SUCCESS]: getIndividualOrganizationDataSuccess,
  [Types.GET_ORGANIZATION_DETAIL_DATA_SUCCESS]: getOrganizationDetailDataSuccess,
});

export default individualOrganizationsReducer;
