/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@Hooks/useOutsideClick';
import { toTitleCase } from '@Utils/commonUtils';

const Select = ({ options, selected, onClick, className, className1 }) => {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();
  return (
    <div
      className={toggle ? `pm-select ${className} pm-select_show` : `pm-select ${className}`}
      ref={toggleRef}
      onClick={handleToggle}
    >
      <div className={`pm-select_item ${className1}`}>
        <span>{selected}</span>
      </div>
      <ul className="pm-select_list left-dropdown">
        {options &&
          options.map((data, index) =>
            typeof data === 'string' ? (
              <li role="menuitem" onKeyDown={() => {}} onClick={() => onClick(data)} key={`${data}${index}`}>
                {toTitleCase(data)}
              </li>
            ) : (
              <li
                role="menuitem"
                onKeyDown={() => {}}
                onClick={() => onClick(data.name, data.id)}
                key={`${data}${index}`}
              >
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
};

Select.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.array,
  className: PropTypes.string,
  className1: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Select;
