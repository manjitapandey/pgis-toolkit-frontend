import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    setHeaderHeight: ['payload'],
  },
  { prefix: 'ProjectHeader/' },
);

export default Creators;
