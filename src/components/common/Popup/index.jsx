import React from 'react';
import PropTypes from 'prop-types';
import popupAction from '@Actions/popup';

const Popup = ({ className, header, body, buttonTitle, handleButtonClick, popup, handleCloseClick }) => (
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
      <div className="pm-modal_body">{body}</div>
      <div className="pm-modal_footer  is-flex is-center is-gap-10">
        <button type="button" className="is-btn is-btn_primary" onClick={handleButtonClick}>
          {buttonTitle}
        </button>
      </div>
    </div>
  </div>
);

Popup.defaultProps = {
  className: '',
  header: '',
  buttonTitle: '',
  handleButtonClick: () => {},
  handleCloseClick: () => {},
  popup: false,
};

Popup.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.node.isRequired,
  buttonTitle: PropTypes.string,
  handleButtonClick: PropTypes.func,
  handleCloseClick: PropTypes.func,
  popup: PropTypes.bool,
};

export default Popup;
