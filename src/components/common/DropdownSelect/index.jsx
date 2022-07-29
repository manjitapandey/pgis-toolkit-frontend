/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@Hooks/useOutsideClick';

const DropdownSelect = ({ options, selected, onClick }) => {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();
  const handleClick = () => {
    handleToggle();
  };
  return (
    <div
      className={toggle ? 'pm-select is-option is-sort pm-select_show' : 'pm-select is-option is-sort'}
      ref={toggleRef}
      onClick={handleClick}
    >
      <p className="pm-select_item">{selected}</p>
      <ul className="pm-select_list left-dropdown">
        {options.map((elem) => (
          <li onKeyDown={() => {}} onClick={() => onClick({ value: elem.value, clicked: true }, elem)}>
            <span>{elem.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.object,
  selected: PropTypes.string,
  onClick: PropTypes.func,
};

DropdownSelect.defaultProps = {
  options: [],
  selected: '',
  onClick: () => {},
};

export default DropdownSelect;
