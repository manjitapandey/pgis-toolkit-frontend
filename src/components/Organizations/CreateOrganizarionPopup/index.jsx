/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from '@Components/common/Popup/index';
import Input from '@Components/common/Input/index';
import useDebouncedInput from '@Hooks/useDebouncedInput';
import { Creators } from '@Actions/organizations';
import ListData from '../ListData/index';

const {
  setAddOrganizationData,
  postOrganizationDataRequest,
  deleteOrganizationRequest,
  clearOrganizationData,
  getEmailList,
  setLoading,
} = Creators;

const CreateOrganizationPopup = ({ openPopup, setOpenPopup, popupType }) => {
  const dispatch = useDispatch();
  const addOrganizationData = useSelector((state) => state.organizations.addOrganizationData);
  const organizationId = useSelector((state) => state.organizations.organizationId);
  const organizationname = useSelector((state) => state.organizations.organizationName);
  const emailList = useSelector((state) => state.organizations.emailList);
  const loading = useSelector((state) => state.organizations.loading);
  const [organizationData, handleChange, setOrganzationData] = useDebouncedInput({
    ms: 70,
    init: addOrganizationData,
    onChange: (debouncedEvent) => {
      const { name, value } = debouncedEvent.target;
      dispatch(setAddOrganizationData({ name, value }));
    },
  });
  const { organizationName, organizationEmail } = organizationData;
  const handleClose = () => {
    dispatch(setOpenPopup(false));
    dispatch(clearOrganizationData());
  };
  const handleButtonClick = () => {
    dispatch(setLoading(true));
    if (popupType === 'Add') {
      dispatch(
        postOrganizationDataRequest({
          finalData: { organization_name: organizationName, email: JSON.stringify([organizationEmail]) },
        }),
      );
    }
    if (popupType === 'Delete') dispatch(deleteOrganizationRequest({ id: organizationId, isDelete: true }));
  };

  const handleAddClick = () => {
    dispatch(getEmailList());
    setOrganzationData({ name: 'email', value: '' });
  };
  useEffect(() => {
    if (!openPopup) setOrganzationData({});
  }, [openPopup]);

  return (
    <Popup
      popup={openPopup}
      className="pm-modal_cntr_md pm-modal_cntr_radius"
      header={popupType === 'Add' ? 'Create Organization' : 'Delete Organization'}
      buttonTitle={popupType === 'Add' ? 'Invite & save' : 'Delete'}
      handleCloseClick={handleClose}
      handleButtonClick={handleButtonClick}
      isLoading={loading}
      body={
        popupType === 'Add' ? (
          <>
            <Input
              label="Name of organization"
              placeholder="Organization name"
              onChange={handleChange}
              id="organization"
              value={organizationName}
              name="organizationName"
            />
            <div className="pm-group">
              <label className="fw-bold">Email</label>
              <div className="is-flex is-between is-align-center is-gap-10">
                <div className="custom-input-group is-grow">
                  <span className="span-group pl-10">
                    <i className="material-icons-outlined">email</i>
                  </span>
                  <input
                    className="pm-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={organizationEmail}
                    name="organizationEmail"
                  />
                </div>
                <div className="is-circle is-circle_xs is-circle_hover" onClick={handleAddClick}>
                  <i className="material-icons-outlined">add_circle_outline</i>
                </div>
              </div>
              {emailList.length ? <ListData options={emailList} /> : <></>}
            </div>
          </>
        ) : (
          <p>{`Do you want to delete ${organizationname}?`}</p>
        )
      }
    />
  );
};

CreateOrganizationPopup.propTypes = {
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  popupType: PropTypes.string.isRequired,
};

export default CreateOrganizationPopup;
