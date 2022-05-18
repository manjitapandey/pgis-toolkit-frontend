/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '@Components/common/Checkbox/index';
import Dropdown from '@Components/IndividualOrganizations/Dropdown/index';
import { Creators } from '@Actions/individualProject';

const { setLayerFilterActive } = Creators;

const ListCustomInput = ({ uniqueId, catName, isSelected, onChange, icon, onListChange, options }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(setLayerFilterActive('layerFilter'));
  };
  return (
    <li className="" key={`${catName},${uniqueId}`}>
      <div className="is-flex is-between is-align-start is-gap-10">
        <Checkbox
          id={uniqueId}
          name={catName}
          checked={isSelected}
          label={catName}
          onChange={onChange}
          icon={icon}
          className="is-flex is-grow"
        />
        <div className="is-flex is-end is-icon_list is-align-center">
          <button type="button" className="is-btn is-btn_link is-btn_sm">
            <span>Explore</span>
          </button>
          <div className="pm-dropdown pm-dropdown_option">
            <a href="#" className="is-circle is-circle_xs" onClick={handleEdit}>
              <i className="material-icons">edit</i>
            </a>
          </div>
          <Dropdown />
        </div>
      </div>
      <ul className="is-list">
        {options.length ? (
          options.map((item) => (
            <li className="is-flex is-between is-align-start is-gap-10" key={`${item.name}${item.id}`}>
              <Checkbox
                id={item.id}
                name={item.name}
                checked={item.isSelected}
                label={item.name}
                onChange={onListChange}
                icon={item.icon}
                className="is-flex is-grow"
              />
              <div className="is-flex is-end is-icon_list is-align-center">
                <button type="button" className="is-btn is-btn_link is-btn_sm" onClick={handleEdit}>
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
          ))
        ) : (
          <></>
        )}
      </ul>
    </li>
  );
};

ListCustomInput.propTypes = {
  uniqueId: PropTypes.string,
  catName: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  onListChange: PropTypes.func,
  options: PropTypes.object,
};

ListCustomInput.defaultProps = {
  uniqueId: '',
  catName: '',
  isSelected: false,
  onChange: () => {},
  icon: '',
  onListChange: () => {},
  options: [],
};

export default ListCustomInput;
