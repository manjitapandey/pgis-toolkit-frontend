import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/users';

const initialState = {
  organizationData: null,
  individualUserData: null,
  openPopup: false,
  popupType: '',
  selectedId: null,
  groupList: null,
  editedUserData: {},
  emailList: [],
  addAssignData: {},
  individualOrganizationData: [],
  finalData: null,
  finalGroupData: null,
};

const getOrganizationDataSuccess = (state, action) => {
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

const getIndividualOrganizationDataSuccess = (state, action) => {
  const {
    payload: { data, childrenData },
  } = action;
  const individualOrganizationData = childrenData.length
    ? data.results.map((elem, index) => {
        const datas = childrenData
          .map((item, i) => (i === index ? item.data.results.map((items) => ({ ...items, isSelected: false })) : []))
          .filter((element) => element.length)[0];
        return { ...elem, isSelected: false, options: datas || [] };
      })
    : data.results.map((elem) => ({
        ...elem,
        isSelected: false,
      }));
  return {
    ...state,
    individualOrganizationData,
  };
};

const getIndividualUserDataSuccess = (state, action) => {
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

const getOrganizationUsersDataSuccess = (state, action) => {
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

const getUserGroupListSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const groupList = data.map((elem) => ({
    ...elem,
    isSelected: false,
  }));
  return {
    ...state,
    groupList,
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

const getSelectedData = (state, action) => {
  const data = action.payload;
  const { groupList } = state;
  const selectedData = groupList.map((elem) =>
    +elem.id === +data ? { ...elem, isSelected: true } : { ...elem, isSelected: false },
  );
  const finalGroupData = selectedData.filter((elem) => elem.isSelected)[0];
  return {
    ...state,
    groupList: selectedData,
    finalGroupData,
  };
};

const getSelectedOrganization = (state, action) => {
  const {
    payload: { name, id },
  } = action;
  // const { individualOrganizationData } = state;

  const individualOrganizationData = state.individualOrganizationData.map((elem) =>
    elem.name.toLowerCase() === name.toLowerCase()
      ? {
          ...elem,
          isSelected: true,
          options: elem?.options?.map((element, index) => ({ ...element, isSelected: index === 0 })),
        }
      : {
          ...elem,
          isSelected: false,
          options: elem?.options?.map((element, index) => ({ ...element, isSelected: false })),
        },
  );
  const finalData = individualOrganizationData
    .filter((element) => element.isSelected)
    .map((elem) => ({ ...elem, options: elem?.options?.filter((item) => item.isSelected)[0]?.id }))[0];
  return {
    ...state,
    individualOrganizationData,
    finalData,
  };
};

const getSelectedProject = (state, action) => {
  const {
    payload: { name, id, orgName, orgId },
  } = action;
  const data = state.individualOrganizationData.map((elem) =>
    elem.name.toLowerCase() === orgName.toLowerCase()
      ? {
          ...elem,
          // isSelected: !elem.isSelected,
          options: elem?.options?.map((element) =>
            element.name.toLowerCase() === name.toLowerCase()
              ? { ...element, isSelected: true }
              : { ...element, isSelected: false },
          ),
        }
      : { ...elem },
  );
  const individualOrganizationData = data.map((item) => ({
    ...item,
    isSelected: item?.options?.some((datas) => datas?.isSelected === true),
  }));
  const finalData = individualOrganizationData
    ?.filter((element) => element?.isSelected)
    ?.map((elem) => ({ ...elem, options: elem?.options?.filter((item) => item?.isSelected)[0]?.id }))[0];
  return {
    ...state,
    individualOrganizationData,
    finalData,
  };
};

const setAddAssignData = (state, action) => {
  const { addAssignData } = state;
  const {
    payload: { name, value },
  } = action;

  const newAddAssignData = {
    ...addAssignData,
    [name]: value,
  };
  return {
    ...state,
    addAssignData: newAddAssignData,
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

const clearOrganizationList = (state, action) => ({
  ...state,
  individualOrganizationData: [],
});

const usersReducer = createReducer(initialState, {
  [Types.GET_ORGANIZATION_DATA_SUCCESS]: getOrganizationDataSuccess,
  [Types.GET_INDIVIDUAL_ORGANIZATION_DATA_SUCCESS]: getIndividualOrganizationDataSuccess,
  [Types.GET_ORGANIZATION_USERS_DATA_SUCCESS]: getOrganizationUsersDataSuccess,
  [Types.GET_INDIVIDUAL_USER_DATA_SUCCESS]: getIndividualUserDataSuccess,
  [Types.GET_USER_GROUP_LIST_SUCCESS]: getUserGroupListSuccess,
  [Types.SET_EDIT_USER_DATA]: setEditUserData,
  [Types.OPEN_USER_POPUP]: openUserPopup,
  [Types.GET_SELECTED_ID]: getSelectedId,
  [Types.GET_SELECTED_DATA]: getSelectedData,
  [Types.GET_SELECTED_ORGANIZATION]: getSelectedOrganization,
  [Types.GET_SELECTED_PROJECT]: getSelectedProject,
  [Types.GET_EMAIL_LIST]: getEmailList,
  [Types.FILTER_EMAIL_LIST]: filterEmailList,
  [Types.SET_ADD_ASSIGN_DATA]: setAddAssignData,
  [Types.CLEAR_ORGANIZATION_LIST]: clearOrganizationList,
});

export default usersReducer;
