import React from 'react';
import useOutsideClick from '@Hooks/useOutsideClick';
import PropTypes from 'prop-types';

const { BASE_URL } = process.env;

const Dropdown = ({ handleZoomClick, handleDeleteClick, layerId, display }) => {
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
          <li>
            <a onClick={handleZoomClick}>
              <i className="material-icons-outlined">zoom_in</i>
              <span>Zoom to layer</span>
            </a>
          </li>
          <li>
            <a href={`${BASE_URL}/maps/layer_download/?layer_id=${layerId}&output_format=kml`} download>
              <i className="material-icons-outlined">download</i>
              <span>download</span>
            </a>
          </li>
          {/* <li>
            <a>
              <i className="material-icons-outlined">star_border</i>
              <span>add Feature</span>
            </a>
      </li> */}
          <li style={!display ? { display: 'inline' } : { display: 'none' }}>
            <a onClick={handleDeleteClick}>
              <i className="material-icons-outlined">delete</i>
              <span>delete</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  handleDeleteClick: PropTypes.func,
  handleZoomClick: PropTypes.func,
  layerId: PropTypes.any,
  display: PropTypes.bool,
};

Dropdown.defaultProps = {
  handleDeleteClick: () => {},
  handleZoomClick: () => {},
  layerId: '',
  display: false,
};

export default Dropdown;
