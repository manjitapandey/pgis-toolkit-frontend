import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/organizations';

const initialState = {
  organizationData: null,
};

const getOrganizationDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    organizationData: data.results,
  };
};

const organizationsReducer = createReducer(initialState, {
  [Types.GET_ORGANIZATION_DATA_SUCCESS]: getOrganizationDataSuccess,
});

export default organizationsReducer;
