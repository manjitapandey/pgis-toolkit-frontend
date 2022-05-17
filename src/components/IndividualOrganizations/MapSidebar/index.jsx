/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Creators } from '@Actions/individualOrganization';
import { mapProjectOptions } from '@src/constants/commonData';
import Sidebar from '@Components/common/Sidebar/index';
import Dropdown from '../Dropdown/index';

const { setActive, openProjectPopup } = Creators;

const MapSidebar = ({ active }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSearch = () => {};

  const handleClick = () => {
    dispatch(setActive('filter'));
  };
  const handleRoute = (value) => {
    history.push(`/organizations/${id}/projects/${value}`);
  };
  const onButtonClick = (e) => {
    console.log('clicked');
    e.stopPropagation();
    dispatch(openProjectPopup(true));
  };
  return (
    <Sidebar handleClick={handleClick} handleSearch={handleSearch} buttonTitle="Project" onButtonClick={onButtonClick}>
      <div className="dvd-sidebar-body is-overflow" style={{ height: '60vh' }}>
        <div className="project-list ">
          {mapProjectOptions?.map((item, index) => (
            <div
              className="project-list_item project-list_item-active is-flex is-between is-align-start  pd-15"
              key={`${index}${item.name}`}
            >
              <div
                className="flex-content is-grow mr-15"
                onClick={() => handleRoute(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <h4>{item.name}</h4>
                <p className="mt-05">{item?.address}</p>
              </div>
              <Dropdown />
            </div>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

MapSidebar.propTypes = {
  active: PropTypes.string,
};

MapSidebar.defaultProps = {
  active: '',
};

export default MapSidebar;
