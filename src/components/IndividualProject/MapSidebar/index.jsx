import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '@Components/common/Sidebar/index';
import Accordion from '@Components/common/Accordion/index';
import { Creators } from '@Actions/individualProject';
import FilterSidebar from '../FilterSidebar/index';
import CustomInput from './CustomInput/index';
import ListCustomInput from './ListCustomInput/index';

const { setActive, openDatasetPopup, openLayerPopup, getSelectedFromLayer, getSelectedFromSubLayer } = Creators;

const MapSidebar = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.individualProject.active);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const handleSearch = () => {};
  const handleCheckbox = (e, parId, name, catName) => {
    const { id } = e.target;
    dispatch(getSelectedFromLayer({ id, parentId: parId, name, categoryName: catName }));
  };
  const handleListCheckbox = (e, parId, name) => {
    const { id } = e.target;
    dispatch(getSelectedFromSubLayer({ id, parentId: parId, name }));
  };
  const handleClick = () => {
    dispatch(setActive('filter'));
  };
  const onButtonClick = () => {
    dispatch(openDatasetPopup(true));
  };
  const handleButtonClick = (e) => {
    e.stopPropagation();
    dispatch(openLayerPopup(true));
  };
  return (
    <Sidebar handleClick={handleClick} handleSearch={handleSearch} buttonTitle="Add" onButtonClick={onButtonClick}>
      <div className="dvd-sidebar-body is-overflow" style={{ height: '75vh' }}>
        <div className="acc acc-after">
          {layerData &&
            layerData?.map(({ name, type, options, hasSubLayer }) => (
              <Accordion
                header={<h4 className="is-grow ">{name}</h4>}
                handleButtonClick={handleButtonClick}
                body={
                  <ul className="is-list">
                    {hasSubLayer
                      ? options.length &&
                        options?.map((element) => (
                          <ListCustomInput
                            uniqueId={element?.id}
                            catName={element?.name}
                            isSelected={element?.isSelected}
                            onChange={(event) => handleCheckbox(event, element.id, name, element.name)}
                            icon={element?.icon}
                            onListChange={(event) => handleListCheckbox(event, element.id, name)}
                            options={element?.options}
                          />
                        ))
                      : options &&
                        options?.map(({ uniqueId, catName, isSelected, icon }) => (
                          <CustomInput
                            uniqueId={uniqueId}
                            catName={catName}
                            isSelected={isSelected}
                            icon={icon}
                            type={type}
                            onChange={(event) => handleCheckbox(event, uniqueId, name)}
                          />
                        ))}
                  </ul>
                }
              />
            ))}
        </div>
      </div>
      <FilterSidebar active={active} />
    </Sidebar>
  );
};

export default MapSidebar;
