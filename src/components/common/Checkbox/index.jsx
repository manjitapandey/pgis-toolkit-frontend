/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ className, id, type, name, checked, label, onChange, icon }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={`pm-checkbox ${className}`}>
      <input type={type} id={id} name={name} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="is-grow is-flex is-start is-align-start" onClick={handleToggle}>
        {icon && <i className="material-icons mr-10">{icon}</i>}
        <span className="is-grow is-trim-1">{label}</span>
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
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
};

export default Checkbox;
