import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getIndividualOrganizationDataRequest: ['params'],
    getIndividualOrganizationDataSuccess: ['payload'],
    getIndividualOrganizationDataFailure: null,

    getIndividualProjectDataRequest: ['params'],
    getIndividualProjectDataSuccess: ['payload'],
    getIndividualProjectDataFailure: null,

    getOrganizationDetailDataRequest: ['params'],
    getOrganizationDetailDataSuccess: ['payload'],
    getOrganizationDetailDataFailure: null,

    postProjectDataRequest: ['payload'],
    postProjectDataSuccess: ['payload'],
    postProjectDataFailure: null,

    postProjectAdditionalDataRequest: ['payload'],
    postProjectAdditionalDataSuccess: ['payload'],
    postProjectAdditionalDataFailure: null,

    getEmailList: ['payload'],
    filterEmailList: ['payload'],
    setActive: ['payload'],
    handleMapToggle: ['payload'],
    openProjectPopup: ['payload'],
    setAddProjectData: ['payload'],
    setAddBasicData: ['payload'],
    clearProjectData: ['payload'],
    setLoading: ['payload'],
  },
  { prefix: 'IndividualOrganization/' },
);

export default Creators;
