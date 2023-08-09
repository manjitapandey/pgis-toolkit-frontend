import React from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '@Hooks/useOutsideClick';

const TableDropdown = ({ data, handleDelete, handleEdit, handleAssign, deleteData, editData, assignData }) => {
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
        {editData && (
          <li>
            <a onClick={() => handleEdit(data?.id)}>
              <i className="material-icons-outlined">edit</i>
              <span className="is-capitalize">edit</span>
            </a>
          </li>
        )}
        {assignData && (
          <li>
            <a onClick={() => handleAssign(data?.id)}>
              <i className="material-icons-outlined">manage_accounts</i>
              <span className="is-capitalize">Asign</span>
            </a>
          </li>
        )}
        {deleteData && (
          <li>
            <a className="clr-primary-500" onClick={() => handleDelete(data?.id, data?.name)}>
              <i className="material-icons-outlined">delete</i>
              <span className="is-capitalize">delete</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

TableDropdown.propTypes = {
  handleDelete: PropTypes.func,
  handleAssign: PropTypes.func,
  handleEdit: PropTypes.func,
  assignData: PropTypes.bool,
  editData: PropTypes.bool,
  deleteData: PropTypes.bool,
  data: PropTypes.object.isRequired,
};

TableDropdown.defaultProps = {
  handleDelete: () => {},
  handleAssign: () => {},
  handleEdit: () => {},
  assignData: false,
  editData: false,
  deleteData: true,
};

export default TableDropdown;
