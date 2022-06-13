/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect';
import { defaultStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';
import { isEmpty } from '@Utils/commonUtils';

const layerData = (state) => state.individualProject.layerData;
const searchKey = (state) => state.individualProject.searchData;
const fileSelector = (state) => state.individualProject.file;
const addUploadDataSelector = (state) => state.individualProject.addUploadData;
const layerStylesSelector = (state) => state.individualProject.selectedLayerStyle;
const selectedLayerNameSelector = (state) => state.individualProject.selectedLayerName;
const mapIconSelector = (state) => state.individualProject.mapIcon;
const iconSelector = (state) => state.individualProject.file;
const individualLayerDataSelector = (state) => state.individualProject.individualLayerData;

// eslint-disable-next-line
export const searchedLayerSelector = createSelector(layerData, searchKey, (layData, keyword) => {
  if (keyword) {
    const layDataFilter = layData
      ?.map((item) => ({
        ...item,
        options: item.options.filter((element) => element?.name?.toLowerCase().includes(keyword?.toLowerCase())),
      }))
      .filter((items) => items.options.length);
    return layDataFilter;
  }
  return layData;
});

export const finalUploadDataSelector = createSelector(fileSelector, addUploadDataSelector, (file, data) => {
  const finalUploadData = {
    file,
    theme: data.themeId,
    name: data.layerName,
    default: data.default,
    layer_type: 'Vector',
    is_osm_layer: 'False',
  };
  return finalUploadData;
});

export const selectedLayerStyleSelector = createSelector(
  [layerStylesSelector, mapIconSelector],
  (layerStyles, mapIcon) => (layerStyles && !isEmpty(layerStyles) ? layerStyles : { ...defaultStyles }),
);

export const finalLayerStyleSelector = createSelector(
  [layerStylesSelector, selectedLayerNameSelector, iconSelector],
  (layerStyles, layerName, icon) => {
    const newLayerStyle = {
      ...layerStyles,
    };
    delete newLayerStyle.layerName;
    delete newLayerStyle.icon;
    delete newLayerStyle.icon_size;
    delete newLayerStyle.icon_url;
    const finalLayerStyle = {
      style:
        icon || layerStyles?.icon?.url
          ? JSON.stringify({})
          : JSON.stringify({
              ...newLayerStyle,
            }),
      name: layerStyles?.layerName || layerName,
      // icon: icon && !isEmpty(layerStyles?.icon) ? layerStyles?.icon : null,
      icon: icon || '',
      icon_size: JSON.stringify(layerStyles?.icon_size) || JSON.stringify({}),
      std_icon: layerStyles?.icon?.url ? layerStyles?.icon?.url : '',
    };
    return finalLayerStyle;
  },
);
