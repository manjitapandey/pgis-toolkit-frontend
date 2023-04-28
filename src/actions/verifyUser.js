import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getUserVerifiedDataRequest: ['params'],
    getUserVerifiedDataSuccess: ['payload'],
    getUserVerifiedDataFailure: null,

    setToken: ['payload'],
  },
  { prefix: 'verify-user/' },
);

export default Creators;
