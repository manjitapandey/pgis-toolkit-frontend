import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/individualProject';

const initialState = {
  detailPopup: false,
  featureCollection: false,
  headerData: null,
  layerName: '',
  layerId: null,
};

const getFeatureCollectionSuccess = (state, action) => {
  const {
    payload: { data },
  } = action;
  const headerData = Object.entries(data?.results[0])?.map(([key, value]) => key);

  return {
    ...state,
    featureCollection: data,
    headerData,
  };
};

const openDetailPopup = (state, action) => ({ ...state, detailPopup: action.payload });

const selectLayerData = (state, action) => ({ ...state, layerName: action.payload.name, layerId: action.payload.id });

const clearDetailData = (state, action) => ({ ...state, layerName: '', featureCollection: null, layerId: null });

const detailPopupReducer = createReducer(initialState, {
  [Types.GET_FEATURE_COLLECTION_SUCCESS]: getFeatureCollectionSuccess,
  [Types.OPEN_DETAIL_POPUP]: openDetailPopup,
  [Types.SELECT_LAYER_DATA]: selectLayerData,
  [Types.CLEAR_DETAIL_DATA]: clearDetailData,
});

export default detailPopupReducer;
