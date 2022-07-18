import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getPermissionRequest: ['params'],
    getPermissionSuccess: ['payload'],
    getPermissionFailure: null,
  },
  { prefix: 'Permission/' },
);

export default Creators;
