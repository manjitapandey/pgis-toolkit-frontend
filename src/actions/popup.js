import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  openPopup: ['payload'],
});

export default Creators;
