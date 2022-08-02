import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    setCsrfRequest: null,
    setCsrfSuccess: ['payload'],
    setCsrfFailure: null,
  },
  { prefix: 'Common/' },
);

export default Creators;
