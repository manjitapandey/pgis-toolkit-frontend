/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const OptionsButton = ({ options, setActiveTab, selected, label, description }) => {
  const newOptions =
    selected === 'Group'
      ? options.filter((item) => item !== 'Sub-layer')
      : selected === 'Sub-layer'
      ? options.filter((item) => item !== 'Group')
      : options;
  const dispatch = useDispatch();
  return (
    <div className="pm-group">
      <label className="is-capitalize fw-bold">{label}</label>
      <div className="options is-flex is-start is-align-center">
        {newOptions?.map((element) => (
          <div
            key={element}
            className={
              element === selected ? 'options-btn options-btn_active options-btn_active--white' : 'options-btn'
            }
            onClick={() => dispatch(setActiveTab(`${element}`))}
          >
            {element}
          </div>
        ))}
      </div>
      {description && <p className="fs-md mt-10">{description}</p>}
    </div>
  );
};

OptionsButton.propTypes = {
  options: PropTypes.array,
  setActiveTab: PropTypes.func,
  selected: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

OptionsButton.defaultProps = {
  options: [],
  setActiveTab: () => {},
  selected: '',
  label: '',
  description: '',
};

export default OptionsButton;
