import React from 'react';
import PropTypes from 'prop-types';

const OrganizationPopup = ({ openPopup, setOpenPopup }) => {
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <div className={openPopup ? 'pm-modal pm-modal_show' : 'pm-modal'} id="create-organization">
      <div className="pm-modal_cntr pm-modal_cntr_lg pm-modal_cntr_radius">
        <div className="pm-modal_header is-gap-15">
          <h3 className="is-grow">Create Organization</h3>
          <div className="is-flex is-end is-align-center">
            <a href="#" className="pm-modal_close">
              <i className="material-icons" onClick={handleClose}>
                close
              </i>
            </a>
          </div>
        </div>
        <div className="pm-modal_body">
          <div className="row">
            <div className="grid-md-6">
              <div className="pm-group">
                <label className="fw-bold">Name of Organization</label>
                <input type="text" className="pm-control" placeholder="ST-34536" />
              </div>
              <div className="pm-group">
                <label className="fw-bold"> Organization email</label>
                <input type="text" className="pm-control" placeholder="ST-34536" />
              </div>
            </div>
            <div className="grid-md-6">
              <div className="pm-group">
                <div className="upload">
                  <input type="file" id="upload" />
                  <label htmlFor="upload">
                    <div className="upload-icon">
                      <i className="material-icons">backup</i>
                    </div>
                    <p className="opacity-5">Please upload your organization logo (JPEG or PNG file)</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="pm-group">
            <label className="fw-bold"> Organization phone number</label>
            <input type="text" className="pm-control" placeholder="ST-34536" />
          </div>
          <div className="pm-group">
            <label className="fw-bold">organaization address</label>
            <input type="text" className="pm-control" placeholder="ST-34536" />
          </div>
          <div className="is-flex is-wrap is-gap-15">
            <div className="pm-group is-grow">
              <label className="fw-bold"> password</label>
              <div className="custom-input-group">
                <input type="password" className="pm-control" placeholder="ST-34536" />
                <span className="span-group pr-10">
                  <i className="material-icons">visibility</i>
                </span>
              </div>
            </div>
            <div className="pm-group is-grow">
              <label className="fw-bold">confirm password</label>
              <div className="custom-input-group">
                <input type="password" className="pm-control" placeholder="ST-34536" />
                <span className="span-group pr-10">
                  <i className="material-icons">visibility</i>
                </span>
              </div>
            </div>
          </div>

          <div className="pm-group">
            <label className="fw-bold">Email</label>
            <div className="custom-input-group">
              <span className="span-group pl-10">
                <i className="material-icons">email</i>
              </span>
              <input type="email" className="pm-control" placeholder="ST-34536" />
            </div>
          </div>
        </div>
        <div className="pm-modal_footer is-flex is-center is-gap-10">
          <button type="button" className="is-btn is-btn_primary">
            invaite & save
          </button>
        </div>
      </div>
    </div>
  );
};

OrganizationPopup.propTypes = {
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
};

export default OrganizationPopup;
