/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
  value,
  onChange,
  label,
  placeholder,
  name,
  type,
  className,
  readOnly,
  id,
  icon,
  iconAhead,
  labelClassName,
  className1,
}) => (
  <>
    {icon ? (
      <div className={`pm-group ${className1}`}>
        <label className={labelClassName}>{label}</label>
        <div className="custom-input-group">
          {iconAhead && (
            <span className="span-group pl-10">
              <i className="material-icons">{icon}</i>
            </span>
          )}
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
          {!iconAhead && (
            <span className="span-group pr-10">
              <i className="material-icons">{icon}</i>
            </span>
          )}
        </div>
      </div>
    ) : (
      <div className="pm-group">
        <label className={labelClassName}>{label}</label>
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
    )}
  </>
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
  iconAhead: false,
  id: '',
  icon: '',
  labelClassName: 'fw-bold',
  className1: '',
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
  iconAhead: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.string,
  labelClassName: PropTypes.string,
  className1: PropTypes.string,
};

export default Text;
