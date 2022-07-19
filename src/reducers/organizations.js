import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/organizations';

const initialState = {
  organizationData: null,
  addOrganizationData: {
    organizationName: '',
    organizationEmail: '',
  },
  organizationId: null,
  organizationName: '',
  emailList: [],
  orgId: null,
  loading: false,
};

const getOrganizationDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    organizationData: data,
  };
};

const postOrganizationDataSuccess = (state, action) => ({
  ...state,
  orgId: action.payload.data.organization,
});

const deleteOrganizationSuccess = (state, action) => ({
  ...state,
  orgId: action.payload,
});

const setAddOrganizationData = (state, action) => {
  const { addOrganizationData } = state;
  const {
    payload: { name, value },
  } = action;

  const newAddOrganiaztionData = {
    ...addOrganizationData,
    [name]: value,
  };
  return {
    ...state,
    addOrganizationData: newAddOrganiaztionData,
  };
};

const getEmailList = (state, action) => ({
  ...state,
  emailList: action.payload,
});

const filterEmailList = (state, action) => {
  const { emailList } = state;
  const index = action.payload;
  const valueToRemove = [emailList[index]];
  const newEmailList = emailList.filter((element) => !valueToRemove.includes(element));
  return {
    ...state,
    emailList: newEmailList,
  };
};

const setOrgData = (state, action) => {
  const {
    payload: { name, id },
  } = action;
  return {
    ...state,
    organizationId: id,
    organizationName: name,
  };
};

const setLoading = (state, action) => ({
  ...state,
  loading: action.payload,
});

const clearOrganizationData = (state, action) => ({
  ...state,
  addOrganizationData: initialState.addOrganizationData,
});

const organizationsReducer = createReducer(initialState, {
  [Types.GET_ORGANIZATION_DATA_SUCCESS]: getOrganizationDataSuccess,
  [Types.POST_ORGANIZATION_DATA_SUCCESS]: postOrganizationDataSuccess,
  [Types.DELETE_ORGANIZATION_SUCCESS]: deleteOrganizationSuccess,
  [Types.SET_ADD_ORGANIZATION_DATA]: setAddOrganizationData,
  [Types.GET_EMAIL_LIST]: getEmailList,
  [Types.FILTER_EMAIL_LIST]: filterEmailList,
  [Types.SET_ORG_DATA]: setOrgData,
  [Types.SET_LOADING]: setLoading,
  [Types.CLEAR_ORGANIZATION_DATA]: clearOrganizationData,
});

export default organizationsReducer;
