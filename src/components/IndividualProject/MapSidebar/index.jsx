import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '@Components/common/Sidebar/index';
import Accordion from '@Components/common/Accordion/index';
import { accordionOptions } from '@src/constants/commonData';
import Checkbox from '@Components/common/Checkbox/index';
import Dropdown from '@Components/IndividualOrganizations/Dropdown/index';
import individualProjectAction from '@Actions/individualProject';
import FilterSidebar from '../FilterSidebar/index';

const MapSidebar = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.individualProject.active);
  const handleSearch = () => {};
  const handleCheckbox = () => {};
  const handleClick = () => {
    dispatch(individualProjectAction.setActive('filter'));
  };
  const onButtonClick = () => {
    dispatch(individualProjectAction.openDatasetPopup(true));
  };
  const handleButtonClick = (e) => {
    e.stopPropagation();
    dispatch(individualProjectAction.openLayerPopup(true));
  };
  return (
    <Sidebar handleClick={handleClick} handleSearch={handleSearch} buttonTitle="Add" onButtonClick={onButtonClick}>
      <div className="dvd-sidebar-body is-overflow" style={{ height: '75vh' }}>
        <div className="acc acc-after">
          {accordionOptions.map(({ name, type, filter }) => (
            <Accordion
              header={<h4 className="is-grow ">{name}</h4>}
              handleButtonClick={handleButtonClick}
              body={
                <ul className="is-list">
                  {filter.map(({ uniqueId, catName, isSelected, icon }) => (
                    <li className="is-flex is-between is-align-start is-gap-10" key={`${uniqueId}${catName}`}>
                      <Checkbox
                        id={uniqueId}
                        type={type}
                        name={catName}
                        checked={isSelected}
                        label={catName}
                        onChange={(event) => handleCheckbox(event, name, catName)}
                        icon={icon}
                        className="is-flex is-grow"
                      />
                      <div className="is-flex is-end is-icon_list is-align-center">
                        <button type="button" className="is-btn is-btn_link is-btn_sm">
                          <span>Explore</span>
                        </button>
                        <div className="pm-dropdown pm-dropdown_option">
                          <a href="#" className="is-circle is-circle_xs">
                            <i className="material-icons">edit</i>
                          </a>
                        </div>
                        <Dropdown />
                      </div>
                    </li>
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
