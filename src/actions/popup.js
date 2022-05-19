import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    openPopup: ['payload'],
  },
  { prefix: 'Popup/' },
);

export default Creators;
