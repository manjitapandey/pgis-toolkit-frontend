import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@Components/common/Checkbox/index';
import Dropdown from '@Components/IndividualOrganizations/Dropdown/index';

const CustomInput = ({ uniqueId, type, catName, isSelected, onChange, icon }) => (
  <li className="is-flex is-between is-align-start is-gap-10" key={`${uniqueId}${catName}`}>
    <Checkbox
      id={uniqueId}
      type={type}
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
        <a href="#" className="is-circle is-circle_xs">
          <i className="material-icons">edit</i>
        </a>
      </div>
      <Dropdown />
    </div>
  </li>
);

CustomInput.propTypes = {
  uniqueId: PropTypes.string,
  type: PropTypes.string,
  catName: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.string,
};

CustomInput.defaultProps = {
  uniqueId: '',
  type: '',
  catName: '',
  isSelected: false,
  onChange: () => {},
  icon: '',
};

export default CustomInput;
