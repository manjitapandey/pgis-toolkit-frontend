import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getOrganizationDataRequest: ['params'],
    getOrganizationDataSuccess: ['payload'],
    getOrganizationDataFailure: null,

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

    setToken: ['payload'],
    openUserPopup: ['payload'],
    getSelectedId: ['payoad'],
    setEditUserData: ['payload'],
  },
  { prefix: 'users/' },
);

export default Creators;
