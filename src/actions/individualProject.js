import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getProjectLayerDataRequest: ['params'],
    getProjectLayerDataSuccess: ['payload'],
    getProjectLayerDataFailure: null,

    getIndividualLayerDataRequest: ['params'],
    getIndividualLayerDataSuccess: ['payload'],
    getIndividualLayerDataFailure: null,

    getLayerTemplateListRequest: ['params'],
    getLayerTemplateListSuccess: ['payload'],
    getLayerTemplateListFailure: null,

    getTaskResponseRequest: ['params'],
    getTaskResponseSuccess: ['payload'],
    getTaskResponseFailure: null,

    getGroupListRequest: ['params'],
    getGroupListSuccess: ['payload'],
    getGroupListFailure: null,

    postGroupDataRequest: ['payload'],
    postGroupDataSuccess: ['payload'],
    postGroupDataFailure: null,

    postUploadDataRequest: ['payload'],
    postUploadDataSuccess: ['payload'],
    postUploadDataFailure: null,

    postThemeDataRequest: ['payload'],
    postThemeDataSuccess: ['payload'],
    postThemeDataFailure: null,

    postLayerDataRequest: ['payload'],
    postLayerDataSuccess: ['payload'],
    postLayerDataFailure: null,

    deleteLayerDataRequest: ['payload'],
    deleteLayerDataSuccess: ['payload'],
    deleteLayerDataFailure: null,

    setAddUploadDataFile: ['payload'],
    setAddUploadData: ['payload'],
    setAddThemeData: ['payload'],
    setEditLayerData: ['payload'],
    deleteUploadDataFile: ['payload'],

    getSelectedFromLayer: ['payload'],
    getSelectedFromSubLayer: ['payload'],
    setActive: ['payload'],
    setLayerFilterActive: ['payload'],
    handleMapToggle: ['payload'],
    openLayerPopup: ['payload'],
    openDatasetPopup: ['payload'],
    getSearchData: ['payload'],
    clearData: ['payload'],
    setLayerDeleteData: ['payload'],
    setThemeAddSuccess: ['payload'],
    setLayerDeleteSuccess: ['payload'],
    handleStyleInput: ['payload'],
    setMapIcon: ['payload'],
  },
  { prefix: 'IndividualProject/' },
);

export default Creators;
