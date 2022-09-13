import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    signupRequest: ['payload'],
    signupSuccess: ['payload'],
    signupFailure: ['payload'],
  },
  { prefix: 'SIGNUP/' },
);

export default Creators;
