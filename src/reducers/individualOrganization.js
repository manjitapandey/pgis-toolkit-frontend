import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualOrganization';

const initialState = {
  active: 'map',
  mapToggle: false,
  openProjectPopup: false,
  individualOrganizationData: null,
  individualProjectData: null,
  organizationData: null,
  emailList: [],
  loading: false,
  addProjectData: {
    projectName: '',
    projectEmail: '',
  },
  addBasicData: {},
  selectedProjectId: null,
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

const setAddProjectData = (state, action) => {
  const { addProjectData } = state;
  const {
    payload: { name, value },
  } = action;

  const newAddProjectData = {
    ...addProjectData,
    [name]: value,
  };
  return {
    ...state,
    addProjectData: newAddProjectData,
  };
};

const setAddBasicData = (state, action) => {
  const { addBasicData } = state;
  const {
    payload: { name, value },
  } = action;

  const newAddBasicData = {
    ...addBasicData,
    [name]: value,
  };
  return {
    ...state,
    addBasicData: newAddBasicData,
  };
};

const getIndividualOrganizationDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  return {
    ...state,
    individualOrganizationData: data.results,
  };
};

const getIndividualProjectDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const addBasicData = {
    name: data.name,
    start_date: data.start_date,
    end_date: data.end_date,
    description: data.description,
  };
  return {
    ...state,
    individualProjectData: data.results,
    selectedProjectId: data.id,
    addBasicData,
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

const postProjectDataSuccess = (state, action) => {
  const {
    payload: { data, finalData },
  } = action;
  const individualOrganizationData = [
    { id: data?.project, name: finalData?.project_name, country: [], state: [] },
    ...state.individualOrganizationData,
  ];
  return {
    ...state,
    individualOrganizationData,
  };
};

const postProjectAdditionalDataSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const individualOrganizationData = state.individualOrganizationData.map((elem) =>
    elem.id === data.id ? { ...elem, name: data.name, country: data.country, state: data.state } : { ...elem },
  );
  return {
    ...state,
    individualOrganizationData,
  };
};

const setLoading = (state, action) => ({
  ...state,
  loading: action.payload,
});

const clearProjectData = (state, action) => ({
  ...state,
  addProjectData: initialState.addProjectData,
  emailList: [],
  addBasicData: initialState.addBasicData,
  selectedProjectId: initialState.selectedProjectId,
});

const individualOrganizationsReducer = createReducer(initialState, {
  [Types.SET_ACTIVE]: setActive,
  [Types.HANDLE_MAP_TOGGLE]: handleMapToggle,
  [Types.OPEN_PROJECT_POPUP]: openProjectPopup,
  [Types.GET_EMAIL_LIST]: getEmailList,
  [Types.FILTER_EMAIL_LIST]: filterEmailList,
  [Types.SET_ADD_PROJECT_DATA]: setAddProjectData,
  [Types.SET_ADD_BASIC_DATA]: setAddBasicData,
  [Types.CLEAR_PROJECT_DATA]: clearProjectData,
  [Types.FILTER_EMAIL_LIST]: filterEmailList,
  [Types.SET_LOADING]: setLoading,
  [Types.GET_INDIVIDUAL_ORGANIZATION_DATA_SUCCESS]: getIndividualOrganizationDataSuccess,
  [Types.GET_INDIVIDUAL_PROJECT_DATA_SUCCESS]: getIndividualProjectDataSuccess,
  [Types.GET_ORGANIZATION_DETAIL_DATA_SUCCESS]: getOrganizationDetailDataSuccess,
  [Types.POST_PROJECT_DATA_SUCCESS]: postProjectDataSuccess,
  [Types.POST_PROJECT_ADDITIONAL_DATA_SUCCESS]: postProjectAdditionalDataSuccess,
});

export default individualOrganizationsReducer;
