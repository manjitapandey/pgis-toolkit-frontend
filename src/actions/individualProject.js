import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    // getProjectLayerDataRequest: ['params'],
    // getProjectLayerDataSuccess: ['payload'],
    // getProjectLayerDataFailure: null,

    getThemeListRequest: ['params'],
    getThemeListSuccess: ['payload'],
    getThemeListFailure: null,

    getProjectThemeRequest: ['params'],
    getProjectThemeSuccess: ['payload'],
    getProjectThemeFailure: null,

    getIndividualProjectDataRequest: ['params'],
    getIndividualProjectDataSuccess: ['payload'],
    getIndividualProjectDataFailure: null,

    getIndividualLayerDataRequest: ['params'],
    getIndividualLayerDataSuccess: ['payload'],
    getIndividualLayerDataFailure: null,

    getIndividualSubLayerDataRequest: ['params'],
    getIndividualSubLayerDataSuccess: ['payload'],
    getIndividualSubLayerDataFailure: null,

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

    getFeatureByIdRequest: ['params'],
    getFeatureByIdSuccess: ['payload'],
    getFeatureByIdFailure: null,

    getStandardIconsRequest: ['params'],
    getStandardIconsSuccess: ['payload'],
    getStandardIconsFailure: null,

    getAttributeAliasRequest: ['params'],
    getAttributeAliasSuccess: ['payload'],
    getAttributeAliasFailure: null,

    updateFeatureByIdRequest: ['payload'],
    updateFeatureByIdSuccess: null,
    updateFeatureByIdFailure: null,

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

    postSubLayerDataRequest: ['payload'],
    postSubLayerDataSuccess: ['payload'],
    postSubLayerDataFailure: null,

    deleteLayerDataRequest: ['payload'],
    deleteLayerDataSuccess: ['payload'],
    deleteLayerDataFailure: null,

    setZoomToLayerId: ['payload'],
    setAddUploadDataFile: ['payload'],
    setAddUploadData: ['payload'],
    setAddThemeData: ['payload'],
    setEditLayerData: ['payload'],
    deleteUploadDataFile: ['payload'],
    setRefreshFeatureLayer: ['payload'],

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
    handleStyleInput: ['payload'],
    setLayerLoading: ['payload'],
    setTaskLoading: ['payload'],
    openDetailPopup: ['payload'],
    selectLayerData: ['payload'],
    clearDetailData: ['payload'],
    setActiveTypeTab: ['payload'],
    setAddUpdatedData: ['payload'],
    setLayerIdHavingSubLayer: ['payload'],
    clearLayerStyleData: ['payload'],
    setSelectedData: ['payload'],
    cancelFeaturePolygonEdit: null,
  },
  { prefix: 'IndividualProject/' },
);

export default Creators;
