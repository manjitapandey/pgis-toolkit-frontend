import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getOrganizationDataRequest: ['params'],
    getOrganizationDataSuccess: ['payload'],
    getOrganizationDataFailure: null,
  },
  { prefix: 'Organization/' },
);

export default Creators;
