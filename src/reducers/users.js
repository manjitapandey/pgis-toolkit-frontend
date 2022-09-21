import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/users';

const initialState = {
  organizationData: null,
  individualUserData: null,
  openPopup: false,
  popupType: '',
  selectedId: null,
  editedUserData: {},
};

const getOrganizationDataRequest = (state, action) => {
  const {
    payload: { data },
  } = action;
  const organizationData = data.results.map((elem) => ({
    ...elem,
    options: [],
  }));
  return {
    ...state,
    organizationData,
  };
};

const getIndividualUserDataRequest = (state, action) => {
  const {
    payload: { data },
  } = action;
  const editedUserData = {
    full_name: data?.full_name,
    email: data?.email,
    username: data?.username,
    address: data?.address,
    contact: data?.contact,
  };
  return {
    ...state,
    individualUserData: data,
    editedUserData,
  };
};

const getOrganizationUsersDataRequest = (state, action) => {
  const {
    payload: { data, id },
  } = action;
  const { organizationData } = state;
  const newOrganizationData = organizationData.map((elem) =>
    elem.id === id ? { ...elem, options: data } : { ...elem },
  );
  return {
    ...state,
    organizationData: newOrganizationData,
  };
};

const setEditUserData = (state, action) => {
  const {
    payload: { name, value },
  } = action;
  const { editedUserData } = state;

  const newEditeduserData = {
    ...editedUserData,
    [name]: value,
  };
  return {
    ...state,
    editedUserData: newEditeduserData,
  };
};

const getSelectedId = (state, action) => ({
  ...state,
  selectedId: action.payload,
});

const openUserPopup = (state, action) => ({
  ...state,
  openPopup: action.payload.popup,
  popupType: action.payload.type,
});

const usersReducer = createReducer(initialState, {
  [Types.GET_ORGANIZATION_DATA_SUCCESS]: getOrganizationDataRequest,
  [Types.GET_ORGANIZATION_USERS_DATA_SUCCESS]: getOrganizationUsersDataRequest,
  [Types.GET_INDIVIDUAL_USER_DATA_SUCCESS]: getIndividualUserDataRequest,
  [Types.SET_EDIT_USER_DATA]: setEditUserData,
  [Types.OPEN_USER_POPUP]: openUserPopup,
  [Types.GET_SELECTED_ID]: getSelectedId,
});

export default usersReducer;
