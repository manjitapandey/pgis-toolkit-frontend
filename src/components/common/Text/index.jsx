/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ value, onChange, label, placeholder, name, type, className, readOnly, id }) => (
  <div className="pm-group">
    <label>{label}</label>
    <input
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ color: 'black' }}
      readOnly={readOnly}
      id={id}
    />
  </div>
);

Text.defaultProps = {
  onChange: () => {},
  value: '',
  label: '',
  name: '',
  className: 'pm-control',
  placeholder: '',
  type: 'text',
  readOnly: false,
  id: '',
};

Text.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
};

export default Text;
