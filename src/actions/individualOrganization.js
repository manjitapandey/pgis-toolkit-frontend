import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getIndividualOrganizationDataRequest: ['params'],
  getIndividualOrganizationDataSuccess: ['payload'],
  getIndividualOrganizationDataFailure: null,

  setActive: ['payload'],
  handleMapToggle: ['payload'],
  openProjectPopup: ['payload'],
});

export default Creators;
