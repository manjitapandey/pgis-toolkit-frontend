import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@Hooks/useOutsideClick';
import { isEmpty } from '@Utils/commonUtils';

const Dropdown = ({ options, selected, onClick }) => {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();
  return (
    <div className={toggle ? 'pm-dropdown pm-dropdown_right pm-dropdown_show' : 'pm-dropdown pm-dropdown_right'}>
      <a className="is-btn is-btn_secondary is-btn_icon" ref={toggleRef} onClick={handleToggle}>
        <i className="material-icons">settings</i>
        <div>settings</div>
      </a>
      <ul className="pm-dropdown_menu right-select" style={{ display: toggle ? 'block' : 'none' }}>
        {!isEmpty(options) ? (
          options.map((opt) => (
            <li key={opt.id} role="menuitem" onKeyDown={() => {}} onClick={() => onClick(opt.name, opt)}>
              <a>{opt.name}</a>
            </li>
          ))
        ) : (
          <li>
            <a />
          </li>
        )}
      </ul>
    </div>
  );
};

Dropdown.defaultProps = {
  options: [],
  selected: '',
};

Dropdown.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func.isRequired,
  options: PropTypes.array,
};

export default Dropdown;
