import React from 'react';
import useOutsideClick from '@Hooks/useOutsideClick';
import PropTypes from 'prop-types';

const { BASE_URL } = process.env;

const Dropdown = ({
  permission,
  handleZoomClick,
  handleDeleteClick,
  handleEdit,
  layerId,
  display,
  type,
  displayZoom,
}) => {
  const [toggleRef, toggle, handleToggle] = useOutsideClick();

  return (
    <div className="is-flex is-end is-align-center">
      <div
        className={
          toggle
            ? 'pm-dropdown pm-dropdown_option pm-dropdown_right pm-dropdown_show'
            : 'pm-dropdown pm-dropdown_option pm-dropdown_right '
        }
      >
        <a className="is-circle is-circle_xs" ref={toggleRef} onClick={handleToggle}>
          <i className="material-icons-outlined">more_vert</i>
        </a>
        <ul className="pm-dropdown_menu">
          {permission?.includes('change_project') && (
            <li style={{ cursor: 'pointer' }}>
              <a onClick={handleEdit}>
                <i className="material-icons-outlined">edit</i>
                <span>Edit</span>
              </a>
            </li>
          )}
          <li style={!displayZoom ? { display: 'inline', cursor: 'pointer' } : { display: 'none' }}>
            <a onClick={handleZoomClick}>
              <i className="material-icons-outlined">zoom_in</i>
              <span>Zoom to layer</span>
            </a>
          </li>
          <li style={{ cursor: 'pointer' }}>
            <a href={`${BASE_URL}/maps/layer_download/?layer_id=${layerId}&output_format=kml`} download>
              <i className="material-icons-outlined">download</i>
              <span>Download</span>
            </a>
          </li>
          {/* <li>
            <a>
              <i className="material-icons-outlined">star_border</i>
              <span>add Feature</span>
            </a>
      </li> */}
          {permission?.includes('delete_project') && (
            <li style={!display ? { display: 'inline', cursor: 'pointer' } : { display: 'none' }}>
              <a onClick={handleDeleteClick}>
                <i className="material-icons-outlined">delete</i>
                <span>Delete</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  handleDeleteClick: PropTypes.func,
  handleZoomClick: PropTypes.func,
  handleEdit: PropTypes.func,
  layerId: PropTypes.any,
  display: PropTypes.bool,
  displayZoom: PropTypes.bool,
  type: PropTypes.string,
  permission: PropTypes.array,
};

Dropdown.defaultProps = {
  handleDeleteClick: () => {},
  handleZoomClick: () => {},
  handleEdit: () => {},
  layerId: '',
  display: false,
  displayZoom: false,
  type: '',
  permission: [],
};

export default Dropdown;
