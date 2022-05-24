/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomSwitch = ({ id, onChange, name, value, label, className, checked }) => {
  return (
    <div className="pm-group">
      <div className={`is-flex ${className} is-align-center`}>
        {label && <label className="fw-bold is-capitalize">{label}</label>}
        <label className="switch">
          <input type="checkbox" value={value} id={id} name={name} onChange={onChange} checked={checked} />
          <span className="switch-slider"> </span>
        </label>
      </div>
    </div>
  );
};

CustomSwitch.defaultProps = {
  onChange: () => {},
  name: '',
  value: false,
  checked: false,
  label: '',
  className: 'is-between',
};

CustomSwitch.propTypes = {
  select: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default CustomSwitch;
