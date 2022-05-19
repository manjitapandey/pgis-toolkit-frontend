import { createSelector } from 'reselect';

const layerData = (state) => state.individualProject.layerData;
const searchKey = (state) => state.individualProject.searchData;

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
