import React from 'react';
import useOutsideClick from '@Hooks/useOutsideClick';

const TableDropdown = () => {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();
  return (
    <div className="is-flex is-end">
      <div
        className={
          toggle
            ? 'pm-dropdown pm-dropdown_option pm-dropdown_right pm-dropdown_show'
            : 'pm-dropdown pm-dropdown_option pm-dropdown_right'
        }
      >
        <a className="is-circle is-circle_xs" ref={toggleRef} onClick={handleToggle}>
          <i className="material-icons">more_vert</i>
        </a>
        <ul className="pm-dropdown_menu">
          <li>
            <a>
              <i className="material-icons">edit</i>
              <span>edit</span>
            </a>
          </li>
          <li>
            <a>
              <i className="material-icons">delete</i>
              <span>delete</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableDropdown;
