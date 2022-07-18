import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    openPopup: ['payload'],
    openDeletePopup: ['payload'],
    setPopupType: ['payload'],
  },
  { prefix: 'Popup/' },
);

export default Creators;
