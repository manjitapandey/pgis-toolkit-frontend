import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setActive: ['payload'],
  handleMapToggle: ['payload'],
});

export default Creators;
