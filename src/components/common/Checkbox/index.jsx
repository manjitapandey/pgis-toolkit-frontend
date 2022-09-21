/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SVGImageIcon from '@Components/common/SVGImageIcon/index';

const Checkbox = ({ className, id, type, name, checked, label, onChange, icon, spanClassname }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={`pm-checkbox ${className}`} key={`${id}${name}`}>
      <input type={type} id={id} name={name} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="is-grow is-flex is-start is-align-start" onClick={handleToggle}>
        {/* icon && <i className="material-icons mr-10">{icon}</i>
         */}
        {/* icon && <img src={icon} alt="default" style={{ height: '20px', width: '20px', marginRight: '4px' }} /> */}
        <span className={`is-grow ${spanClassname}`}>{label}</span>
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  className: '',
  icon: '',
  type: 'checkbox',
  spanClassname: 'is-trim-1',
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
  spanClassname: PropTypes.string,
};

export default Checkbox;
