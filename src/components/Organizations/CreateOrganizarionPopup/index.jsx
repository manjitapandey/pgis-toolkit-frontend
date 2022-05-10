import React from 'react';
import PropTypes from 'prop-types';
import Popup from '@Components/common/Popup/index';
import Text from '@Components/common/Text/index';

const CreateOrganizationPopup = ({ openPopup, setOpenPopup }) => {
  const handleClose = () => {
    setOpenPopup(false);
  };
  const handleTextChange = () => {};
  return (
    <Popup
      popup={openPopup}
      className="pm-modal_cntr_lg pm-modal_cntr_radius"
      header="Create Organization"
      buttonTitle="Invite & save"
      handleCloseClick={handleClose}
      body={
        <>
          <div className="row">
            <div className="grid-md-6">
              <Text label="Name of organization" placeholder="ST-34536" onChange={handleTextChange} />
              <Text label="Organization email" placeholder="ST-34536" type="emaill" onChange={handleTextChange} />
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
          <Text
            labelClassName="fw-bold"
            label="Organization phone number"
            placeholder="ST-34536"
            type="number"
            onChange={handleTextChange}
          />
          <Text
            labelClassName="fw-bold"
            label="Organization address"
            placeholder="ST-34536"
            onChange={handleTextChange}
          />
          <div className="is-flex is-wrap is-gap-15">
            <Text
              icon="visibility"
              type="password"
              label="Password"
              placeholder="ST-34536"
              onChange={handleTextChange}
              className1="is-grow"
            />
            <Text
              icon="visibility"
              type="password"
              label="Confirm Password"
              placeholder="ST-34536"
              className1="is-grow"
              onChange={handleTextChange}
            />
          </div>
          <Text
            labelClassName="fw-bold"
            iconAhead
            icon="email"
            label="Email"
            type="email"
            placeholder="ST-34536"
            onChange={handleTextChange}
          />
        </>
      }
    />
  );
};

CreateOrganizationPopup.propTypes = {
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
};

export default CreateOrganizationPopup;
