import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setActive: ['payload'],
  handleMapToggle: ['payload'],
  openLayerPopup: ['payload'],
  openDatasetPopup: ['payload'],
});

export default Creators;
