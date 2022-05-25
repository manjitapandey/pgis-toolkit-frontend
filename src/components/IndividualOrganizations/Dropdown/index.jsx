import React from 'react';
import useOutsideClick from '@Hooks/useOutsideClick';
import PropTypes from 'prop-types';

const Dropdown = ({ handleZoomClick, handleDeleteClick }) => {
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
          <i className="material-icons">more_vert</i>
        </a>
        <ul className="pm-dropdown_menu">
          <li>
            <a onClick={handleZoomClick}>
              <i className="material-icons">zoom_in</i>
              <span>Zoom to layer</span>
            </a>
          </li>
          {/* <li>
            <a>
              <i className="material-icons">star_border</i>
              <span>add Feature</span>
            </a>
      </li> */}
          <li>
            <a onClick={handleDeleteClick}>
              <i className="material-icons">delete</i>
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
};

Dropdown.defaultProps = {
  handleDeleteClick: () => {},
  handleZoomClick: () => {},
};

export default Dropdown;
