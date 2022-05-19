import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getIndividualOrganizationDataRequest: ['params'],
    getIndividualOrganizationDataSuccess: ['payload'],
    getIndividualOrganizationDataFailure: null,

    getOrganizationDetailDataRequest: ['params'],
    getOrganizationDetailDataSuccess: ['payload'],
    getOrganizationDetailDataFailure: null,

    setActive: ['payload'],
    handleMapToggle: ['payload'],
    openProjectPopup: ['payload'],
  },
  { prefix: 'IndividualOrganization/' },
);

export default Creators;
