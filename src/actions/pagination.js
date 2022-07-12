import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getCurrentPage: ['payload'],
  },
  { prefix: 'Pagination/' },
);

export default Creators;
