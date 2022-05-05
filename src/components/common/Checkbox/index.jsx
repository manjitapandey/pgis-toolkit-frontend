/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ className, id, type, name, checked, label, onChange, icon }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="pm-checkbox is-flex is-grow">
      <input type={type} id={id} ame={name} checked={checked} onChange={onChange} />
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
};

Checkbox.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
};

export default Checkbox;
