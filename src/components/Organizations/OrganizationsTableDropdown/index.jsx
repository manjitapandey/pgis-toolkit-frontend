import React from 'react';
import useOutsideClick from '@Hooks/useOutsideClick';

const TableDropdown = () => {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();
  return (
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
            <i className="material-icons-outlined">edit</i>
            <span className="is-capitalize">edit</span>
          </a>
        </li>
        <li>
          <a>
            <i className="material-icons-outlined">manage_accounts</i>
            <span className="is-capitalize">Asign</span>
          </a>
        </li>
        <li>
          <a className="clr-primary-500">
            <i className="material-icons-outlined">delete</i>
            <span className="is-capitalize">delete</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TableDropdown;
