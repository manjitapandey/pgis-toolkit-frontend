import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getOrganizationDataRequest: ['params'],
    getOrganizationDataSuccess: ['payload'],
    getOrganizationDataFailure: null,

    getIndividualOrganizationDataRequest: ['params'],
    getIndividualOrganizationDataSuccess: ['payload'],
    getIndividualOrganizationDataFailure: null,

    editUserDataRequest: ['payload'],
    editUserDataSuccess: ['payload'],
    editUserDataFailure: null,

    deleteUserDataRequest: ['payload'],
    deleteUserDataSuccess: ['payload'],
    deleteUserDataFailure: null,

    getOrganizationUsersDataRequest: ['params'],
    getOrganizationUsersDataSuccess: ['payload'],
    getOrganizationUsersDataFailure: null,

    getIndividualUserDataRequest: ['params'],
    getIndividualUserDataSuccess: ['payload'],
    getIndividualUserDataFailure: null,

    getUserGroupListRequest: ['params'],
    getUserGroupListSuccess: ['payload'],
    getUserGroupListFailure: null,

    setToken: ['payload'],
    openUserPopup: ['payload'],
    getSelectedId: ['payoad'],
    setEditUserData: ['payload'],
    getEmailList: ['payload'],
    filterEmailList: ['payload'],
    setAddAssignData: ['payload'],
    getSelectedData: ['payload'],
    clearOrganizationList: ['payload'],
  },
  { prefix: 'users/' },
);

export default Creators;
