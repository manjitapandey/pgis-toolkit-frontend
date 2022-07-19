import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getOrganizationDataRequest: ['params'],
    getOrganizationDataSuccess: ['payload'],
    getOrganizationDataFailure: null,

    postOrganizationDataRequest: ['payload'],
    postOrganizationDataSuccess: ['payload'],
    postOrganizationDataFailure: null,

    deleteOrganizationRequest: ['payload'],
    deleteOrganizationSuccess: ['payload'],
    deleteOrganizationFailure: null,

    setAddOrganizationData: ['payload'],
    clearOrganizationData: ['payload'],
    setOrgData: ['payload'],
    getEmailList: ['payload'],
    filterEmailList: ['payload'],
    setLoading: ['payload'],
  },
  { prefix: 'Organization/' },
);

export default Creators;
