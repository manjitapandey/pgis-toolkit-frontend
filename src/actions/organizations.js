import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getOrganizationDataRequest: ['params'],
  getOrganizationDataSuccess: ['payload'],
  getOrganizationDataFailure: null,
});

export default Creators;
