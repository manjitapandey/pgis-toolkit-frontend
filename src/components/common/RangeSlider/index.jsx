import React from 'react';
import PropTypes from 'prop-types';

const RangeSlider = ({ label, value, onChange, name }) => (
  <div className="pm-group sm-group">
    <label>{label}</label>
    <div className="range-slider-wrapper is-flex is-start is-align-center sm-slider is-gap-15">
      <input
        name={name}
        type="number"
        min="0"
        max="100"
        className="output-value pm-control sm-control"
        value={value}
        onChange={onChange}
        style={{ width: '4.2rem' }}
      />
      <div className="range-slider is-grow">
        <input
          id="output-value"
          type="range"
          name={name}
          min="0"
          max="100"
          value={value}
          className="range-input"
          onChange={onChange}
        />
        <span className="range-value">
          <span id="fill-value" className="fill" style={{ width: `${value}%` }} />
        </span>
      </div>
    </div>
  </div>
);

RangeSlider.defaultProps = {
  onChange: () => {},
};

RangeSlider.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RangeSlider;
