import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getProjectLayerDataRequest: ['params'],
    getProjectLayerDataSuccess: ['payload'],
    getProjectLayerDataFailure: null,

    getLayerTemplateListRequest: ['params'],
    getLayerTemplateListSuccess: ['payload'],
    getLayerTemplateListFailure: null,

    setAddUploadDataFile: ['payload'],
    setAddUploadData: ['payload'],

    getSelectedFromLayer: ['payload'],
    getSelectedFromSubLayer: ['payload'],
    setActive: ['payload'],
    setLayerFilterActive: ['payload'],
    handleMapToggle: ['payload'],
    openLayerPopup: ['payload'],
    openDatasetPopup: ['payload'],
    getSearchData: ['payload'],
  },
  { prefix: 'IndividualProject/' },
);

export default Creators;
