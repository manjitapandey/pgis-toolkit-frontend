import React from 'react';
import PropTypes from 'prop-types';
import popupAction from '@Actions/popup';
import Spinner from '../Spinner/index';

const Popup = ({ className, header, body, buttonTitle, handleButtonClick, popup, handleCloseClick, isLoading }) => (
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
        {isLoading ? (
          <Spinner
            style={{
              width: '30px',
              height: '30px',
              border: '3px solid #ffffff',
              borderTop: '3px solid #0055ff',
              marginLeft: '6px',
            }}
          />
        ) : (
          <button type="button" className="is-btn is-btn_primary" onClick={handleButtonClick}>
            {buttonTitle}
          </button>
        )}
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
  isLoading: false,
};

Popup.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.node.isRequired,
  buttonTitle: PropTypes.string,
  handleButtonClick: PropTypes.func,
  handleCloseClick: PropTypes.func,
  popup: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Popup;
