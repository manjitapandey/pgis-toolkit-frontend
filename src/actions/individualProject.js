import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    getProjectLayerDataRequest: ['params'],
    getProjectLayerDataSuccess: ['payload'],
    getProjectLayerDataFailure: null,

    getIndividualProjectDataRequest: ['params'],
    getIndividualProjectDataSuccess: ['payload'],
    getIndividualProjectDataFailure: null,

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

    getFeatureCollectionRequest: ['params'],
    getFeatureCollectionSuccess: ['payload'],
    getFeatureCollectionFailure: null,

    getStandardIconsRequest: ['params'],
    getStandardIconsSuccess: ['payload'],
    getStandardIconsFailure: null,

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

    setZoomToLayerId: ['payload'],
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
    clearLayerData: ['payload'],
    setLayerDeleteData: ['payload'],
    setThemeAddSuccess: ['payload'],
    setLayerDeleteSuccess: ['payload'],
    handleStyleInput: ['payload'],
    setLayerLoading: ['payload'],
    setTaskLoading: ['payload'],
    openDetailPopup: ['payload'],
    selectLayerData: ['payload'],
    clearDetailData: ['payload'],
  },
  { prefix: 'IndividualProject/' },
);

export default Creators;
