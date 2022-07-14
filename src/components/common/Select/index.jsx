/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@Hooks/useOutsideClick';
import { toTitleCase } from '@Utils/commonUtils';

const Select = ({ options, selected, handleSelect, className, className1 }) => {
  const [state, setState] = useState('');
  const [toggleRef, toggle, handleToggle] = useOutsideClick();
  const handleClick = (item) => {
    handleSelect(item);
    setState(item.name || item);
  };
  return (
    <div
      className={toggle ? `pm-select ${className} pm-select_show` : `pm-select ${className}`}
      ref={toggleRef}
      onClick={handleToggle}
    >
      <div className={`pm-select_item ${className1}`}>
        <span>{selected || state}</span>
      </div>
      <ul className="pm-select_list left-dropdown">
        {options &&
          options.map((data, index) =>
            typeof data === 'string' ? (
              <li role="menuitem" onKeyDown={() => {}} onClick={() => handleClick(data)} key={`${data}${index}`}>
                {toTitleCase(data)}
              </li>
            ) : (
              <li role="menuitem" onKeyDown={() => {}} onClick={() => handleClick(data)} key={`${data.name}${data.id}`}>
                {toTitleCase(data.name)}
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

Select.defaultProps = {
  options: [],
  className: '',
  className1: '',
  handleSelect: () => {},
};

Select.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.array,
  className: PropTypes.string,
  className1: PropTypes.string,
  handleSelect: PropTypes.func,
};

export default Select;
