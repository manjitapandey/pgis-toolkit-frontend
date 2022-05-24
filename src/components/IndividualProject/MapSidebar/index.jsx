import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '@Components/common/Sidebar/index';
import Accordion from '@Components/common/Accordion/index';
import { Creators } from '@Actions/individualProject';
import { searchedLayerSelector } from '@Selectors/individualProject';
import FilterSidebar from '../FilterSidebar/index';
import CustomInput from './CustomInput/index';
import ListCustomInput from './ListCustomInput/index';
import LayerStyleFilter from '../FilterSidebar/LayerStyleFilter';

const {
  setActive,
  openDatasetPopup,
  openLayerPopup,
  getSelectedFromLayer,
  getSelectedFromSubLayer,
  getSearchData,
  setAddUploadData,
} = Creators;

const MapSidebar = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.individualProject.active);
  const layerFilterActive = useSelector((state) => state.individualProject.layerFilterActive);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const searchData = useSelector((state) => state.individualProject.searchData);
  const searchedLayerData = useSelector(searchedLayerSelector);

  const handleSearch = (event) => {
    dispatch(getSearchData(event.target.value));
  };
  const handleCheckbox = (e, parId, name, catName) => {
    const { id } = e.target;
    dispatch(getSelectedFromLayer({ id, parentId: parId, name, categoryName: catName }));
  };
  const handleListCheckbox = (e, parId, name, catName) => {
    const { id } = e.target;
    dispatch(getSelectedFromSubLayer({ id, parentId: parId, name, categoryName: catName }));
  };
  const handleClick = () => {
    dispatch(setActive('filter'));
  };
  const onButtonClick = () => {
    dispatch(openDatasetPopup(true));
  };
  const handleButtonClick = (e, id, name) => {
    e.stopPropagation();
    dispatch(openLayerPopup(true));
    dispatch(setAddUploadData({ name: 'theme', value: name }));
    dispatch(setAddUploadData({ name: 'themeId', value: id }));
  };
  return (
    <Sidebar
      handleClick={handleClick}
      searchValue={searchData}
      handleSearch={handleSearch}
      buttonTitle="Add"
      onButtonClick={onButtonClick}
    >
      <div className="dvd-sidebar-body is-overflow" style={{ height: '75vh' }}>
        <div className="acc acc-after">
          {searchedLayerData &&
            searchedLayerData?.map(({ id, name, type, options, hasSubLayer }) => (
              <Accordion
                header={<h4 className="is-grow ">{name}</h4>}
                handleButtonClick={(event) => handleButtonClick(event, id, name)}
                body={
                  <ul className="is-list">
                    {
                      options.length &&
                        options?.map((element) => (
                          <ListCustomInput
                            uniqueId={element?.id}
                            catName={element?.name}
                            isSelected={element?.isSelected}
                            onChange={(event) => handleCheckbox(event, element.id, name, element.name)}
                            icon={element?.icon}
                            onListChange={(event) => handleListCheckbox(event, element.id, name, element.name)}
                            options={element?.options}
                          />
                        ))
                      // : options &&
                      //   options?.map((element) => (
                      //     <CustomInput
                      //       uniqueId={element.id}
                      //       catName={element.name}
                      //       isSelected={element.isSelected}
                      //       icon={element.icon}
                      //       type={type}
                      //       onChange={(event) => handleCheckbox(event, element.id, name)}
                      //     />
                      //   ))
                    }
                  </ul>
                }
              />
            ))}
        </div>
      </div>
      <FilterSidebar active={active} />
      <LayerStyleFilter active={layerFilterActive} />
    </Sidebar>
  );
};

export default MapSidebar;
