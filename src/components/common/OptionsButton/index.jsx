import React from 'react';
import PropTypes from 'prop-types';

const OptionsButton = ({ options, setActiveTab, selected, label, description }) => (
  <div className="pm-group">
    <label className="is-capitalize fw-bold">{label}</label>
    <div className="options is-flex is-start is-align-center">
      {options?.map((element) => (
        <div
          key={element}
          className={element === selected ? 'options-btn options-btn_active options-btn_active--white' : 'options-btn'}
          onClick={() => setActiveTab(`${element}`)}
        >
          {element}
        </div>
      ))}
    </div>
    {description && <p className="fs-md mt-10">{description}</p>}
  </div>
);

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
