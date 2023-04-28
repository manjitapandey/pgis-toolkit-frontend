/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Creators, Types as IndividualProjectTypes } from '@Actions/individualProject';

const { handleStyleInput } = Creators;

const ColorSelect = ({ options, colorName, label }) => {
  const dispatch = useDispatch();
  return (
    <div className="pm-group">
      <label>{label}</label>
      <div className="color-list">
        <ul className="is-flex is-start is-align-center is-wrap is-gap-10 " style={{ cursor: 'pointer' }}>
          {options.map(({ id, color }) => (
            <li
              style={{ backgroundColor: `${color}` }}
              className={colorName === color ? 'is-active' : ''}
              onClick={() => {
                dispatch(handleStyleInput({ name: label, value: color }));
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

ColorSelect.defaultProps = {
  options: [],
  colorName: '',
  label: '',
};

ColorSelect.propTypes = {
  options: PropTypes.array,
  colorName: PropTypes.string,
  label: PropTypes.string,
};

export default ColorSelect;
