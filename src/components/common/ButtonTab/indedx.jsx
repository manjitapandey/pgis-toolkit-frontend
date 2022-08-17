import React from 'react';
import PropTypes from 'prop-types';

const ButtonTab = ({ activeButton, setActiveButton, options }) => (
  <div className="options is-flex is-start is-align-center">
    {options.map((item) => (
      <button
        className="pmupload-btn is-btn is-btn_link is-btn_icon"
        type="button"
        onClick={() => setActiveButton(item.name)}
      >
        <label>
          <span>{item.name}</span>
        </label>
      </button>
    ))}
  </div>
);

ButtonTab.defaultProps = {
  activeButton: '',
  setActiveButton: () => {},
  options: [],
};

ButtonTab.propTypes = {
  activeButton: PropTypes.string,
  setActiveButton: PropTypes.func,
  options: PropTypes.array,
};

export default ButtonTab;
