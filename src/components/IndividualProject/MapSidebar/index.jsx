/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '@Components/common/Sidebar/index';
import Accordion from '@Components/common/Accordion/index';
import { Creators } from '@Actions/individualProject';
import { searchedLayerSelector } from '@Selectors/individualProject';
import FilterSidebar from '../FilterSidebar/index';
import CustomInput from './CustomInput/index';
import ListCustomInput from './ListCustomInput/index';
import LayerStyleFilter from '../FilterSidebar/LayerStyleFilter';
import CustomInputLoader from './CustomInputLoader/index';
import SidebarFilterLoader from '../SidebarFilterLoader/index';

const {
  setActive,
  openDatasetPopup,
  openLayerPopup,
  getSelectedFromLayer,
  getSelectedFromSubLayer,
  getSearchData,
  setAddUploadData,
  getIndividualLayerDataRequest,
  getIndividualSubLayerDataRequest,
  getProjectThemeRequest,
} = Creators;

const MapSidebar = ({ isLoading, isGroupLoading, isLayerLoading }) => {
  const dispatch = useDispatch();
  const [headerHeight, setHeaderHeight] = useState(null);
  const windowHeight = window.innerHeight;
  const [layId, setLayId] = useState(null);
  const [subLayerId, setSubLayerId] = useState(null);
  const active = useSelector((state) => state.individualProject.active);
  const layerFilterActive = useSelector((state) => state.individualProject.layerFilterActive);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const searchData = useSelector((state) => state.individualProject.searchData);
  const geomData = useSelector((state) => state.individualProject.geomData);
  const themeList = useSelector((state) => state.individualProject.themeList);
  const projectHeaderHeight = useSelector((state) => state.projectHeader.projectHeaderHeight);
  const searchedLayerData = useSelector(searchedLayerSelector);

  const handleSearch = (event) => {
    dispatch(getSearchData(event.target.value));
  };
  const handleCheckbox = (e, parId, name, catName, type) => {
    const { id } = e.target;
    if (type !== 'group') setLayId(id);
    dispatch(getSelectedFromLayer({ id, parentId: parId, name, categoryName: catName }));
  };
  const handleListCheckbox = (e, parId, name, catName, type) => {
    const { id } = e.target;
    if (type !== 'group') setSubLayerId(id);
    dispatch(getSelectedFromSubLayer({ id, parentId: parId, name, categoryName: catName }));
  };
  const handleClick = () => {
    dispatch(setActive('filter'));
  };
  const onButtonClick = () => {
    dispatch(openDatasetPopup({ value: true, name: 'theme' }));
  };
  const handleButtonClick = (e, id, name) => {
    e.stopPropagation();
    dispatch(openLayerPopup(true));
    dispatch(setAddUploadData({ name: 'theme', value: name }));
    dispatch(setAddUploadData({ name: 'themeId', value: id }));
  };

  useEffect(() => {
    if (layId) {
      dispatch(getIndividualLayerDataRequest({ id: layId, layerData }));
    }
  }, [dispatch, layId, layerFilterActive]);

  useEffect(() => {
    if (subLayerId) {
      dispatch(getIndividualSubLayerDataRequest({ id: subLayerId, layerData }));
    }
  }, [dispatch, subLayerId, layerFilterActive]);

  // const handleHeaderClick = (themeId) => {
  //   dispatch(getProjectThemeRequest({ theme: themeId, project_style: 'default', themeList }));
  // };

  return (
    <Sidebar
      handleClick={handleClick}
      searchValue={searchData}
      handleSearch={handleSearch}
      buttonTitle="Add"
      onButtonClick={onButtonClick}
      setHeaderHeight={setHeaderHeight}
    >
      <div
        className="dvd-sidebar-body is-overflow"
        style={{ height: `${windowHeight - projectHeaderHeight - headerHeight - 50}px` }}
      >
        <div className="acc acc-after">
          {isLoading ? (
            <CustomInputLoader />
          ) : (
            searchedLayerData &&
            searchedLayerData?.map(({ id, name, type, options, hasSubLayer }, index) => (
              <Accordion
                collapsed={index !== 0}
                header={<h4 className="is-grow ">{name}</h4>}
                handleButtonClick={(event) => handleButtonClick(event, id, name)}
                // onHeaderClick={() => handleHeaderClick(id)}
                body={
                  <ul className="is-list">
                    {
                      options.length ? (
                        options?.map((element) => (
                          <ListCustomInput
                            uniqueId={element?.id}
                            catName={element?.name}
                            isSelected={element?.isSelected}
                            onChange={(event) => handleCheckbox(event, element.id, name, element.name, element.type)}
                            icon={element?.icon || element?.std_icon}
                            onListChange={(event) =>
                              handleListCheckbox(event, element.id, name, element.name, element.type)
                            }
                            options={element?.options}
                            themeId={id}
                            type={element?.type}
                          />
                        ))
                      ) : (
                        <></>
                      )
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
            ))
          )}
        </div>
      </div>
      <FilterSidebar active={active} isGroupLoading={isGroupLoading} />
      {isLayerLoading && layerFilterActive === 'layerFilter' ? (
        <SidebarFilterLoader />
      ) : (
        <LayerStyleFilter active={layerFilterActive} isGroupLoading={isGroupLoading} />
      )}
    </Sidebar>
  );
};

MapSidebar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isGroupLoading: PropTypes.bool.isRequired,
  isLayerLoading: PropTypes.bool.isRequired,
};

export default MapSidebar;
