import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getProjectLayerDataRequest: ['params'],
  getProjectLayerDataSuccess: ['payload'],
  getProjectLayerDataFailure: null,

  getSelectedFromLayer: ['payload'],
  getSelectedFromSubLayer: ['payload'],
  setActive: ['payload'],
  handleMapToggle: ['payload'],
  openLayerPopup: ['payload'],
  openDatasetPopup: ['payload'],
});

export default Creators;
