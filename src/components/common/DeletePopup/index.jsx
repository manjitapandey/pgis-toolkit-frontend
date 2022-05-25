import React from 'react';
import PropTypes from 'prop-types';

const DeletePopup = ({ className, header, handleButtonClick, popup, handleCloseClick, name }) => (
  <div className={popup ? 'pm-modal pm-modal_show' : 'pm-modal'} id="create-theme">
    <div className={`pm-modal_cntr ${className}`}>
      <div className="pm-modal_header is-gap-15 mt-15">
        <h3 className="is-grow is-capitalize">{header}</h3>
        <div className="is-flex is-end is-align-center">
          <a className="pm-modal_close" onClick={handleCloseClick}>
            <i className="material-icons-outlined">close</i>
          </a>
        </div>
      </div>
      <div className="pm-modal_body">
        <p>{`Do you want to delete ${name}?`}</p>
      </div>
      <div className="pm-modal_footer  is-flex is-center is-gap-10">
        <button type="button" className="is-btn is-btn_primary" onClick={handleButtonClick}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

DeletePopup.defaultProps = {
  className: '',
  header: '',
  name: '',
  handleButtonClick: () => {},
  handleCloseClick: () => {},
  popup: false,
};

DeletePopup.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  name: PropTypes.string,
  handleButtonClick: PropTypes.func,
  handleCloseClick: PropTypes.func,
  popup: PropTypes.bool,
};

export default DeletePopup;
