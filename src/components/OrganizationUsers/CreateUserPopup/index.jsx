/* eslint-disable no-nested-ternary */
import React from 'react';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/users';
import { useDispatch, useSelector } from 'react-redux';
import EditPopup from './EditPopup';

const { openUserPopup, deleteUserDataRequest, editUserDataRequest } = Creators;

const CreateUserPopup = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.users.openPopup);
  const popupType = useSelector((state) => state.users.popupType);
  const selectedId = useSelector((state) => state.users.selectedId);
  const editedUserData = useSelector((state) => state.users.editedUserData);
  const individualUserData = useSelector((state) => state.users.individualUserData);
  const handleCloseClick = () => {
    dispatch(openUserPopup({ popup: false, type: '' }));
  };
  const handleButtonClick = () => {
    if (popupType === 'delete') dispatch(deleteUserDataRequest({ id: selectedId }));
    if (popupType === 'edit') dispatch(editUserDataRequest({ id: individualUserData?.id, finalData: editedUserData }));
  };
  return (
    <Popup
      className={
        popupType === 'delete' ? 'pm-modal_cntr_sm pm-modal_cntr_radius' : 'pm-modal_cntr_lg pm-modal_cntr_radius'
      }
      header={popupType === 'add' ? 'Create Project' : popupType === 'edit' ? 'Edit Project' : 'Delete Project'}
      popup={popup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      buttonTitle={popupType === 'add' ? 'Invite & Save' : popupType === 'edit' ? 'Edit' : 'Delete'}
      body={
        <>
          {popupType === 'add' && (
            <>
              <div className="pm-group">
                <label className="is-capitalize fw-bold">
                  Upload Profile Photo<sup>*</sup>
                </label>
                <div className="is-flex is-start is-align-center">
                  <figure className="is-circle_md is-circle_img is-circle">
                    <img src="images/user.png" alt="" />
                  </figure>
                  <div className="pmupload-btn is-flex is-start is-align-center">
                    <label htmlFor="upload " className="is-flex is-align-center is-btn is-btn_icon is-btn_link">
                      <i className="material-icons-outlined">upload</i>
                      <span>upload photo</span>
                      <input type="file" id="upload" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="is-flex is-wrap is-gap-15">
                <div className="pm-group is-grow">
                  <label className="fw-bold">First Name</label>
                  <input type="text" className="pm-control" placeholder="ST-34536" />
                </div>
                <div className="pm-group is-grow">
                  <label className="fw-bold">Last Name</label>
                  <input type="text" className="pm-control" placeholder="ST-34536" />
                </div>
              </div>
              <div className="is-flex is-wrap is-gap-15">
                <div className="pm-group is-grow">
                  <label className="fw-bold">username</label>
                  <input type="text" className="pm-control" placeholder="ST-34536" />
                </div>
                <div className="pm-group is-grow">
                  <label>Choose</label>
                  <div className="pm-select pm-select_100">
                    <div className="pm-select_item">
                      <span>choose </span>
                    </div>
                    <ul className="pm-select_list left-dropdown">
                      <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
                      <li data-value="Gandaki">Gandaki</li>
                      <li data-value="Lumbini">Lumbini</li>
                      <li data-value="Bagmati">Gandaki</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pm-group">
                <label className="fw-bold">
                  Phone<sup>*</sup>
                </label>
                <input type="text" className="pm-control" placeholder="ST-34536" />
              </div>
              <div className="pm-group">
                <label className="fw-bold">
                  Address<sup>*</sup>
                </label>
                <input type="text" className="pm-control" placeholder="ST-34536" />
              </div>
              <div className="is-flex is-wrap is-gap-15">
                <div className="pm-group is-grow">
                  <label className="fw-bold"> password</label>
                  <div className="custom-input-group">
                    <input type="password" className="pm-control" placeholder="ST-34536" />
                    <span className="span-group pr-10">
                      <i className="material-icons-outlined">visibility</i>
                    </span>
                  </div>
                </div>
                <div className="pm-group is-grow">
                  <label className="fw-bold is-capitalize"> confirm password</label>
                  <div className="custom-input-group">
                    <input type="password" className="pm-control" placeholder="Start Date" />
                    <span className="span-group pr-10">
                      <i className="material-icons-outlined">visibility</i>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          {popupType === 'edit' && <EditPopup data={editedUserData} />}
          {popupType === 'delete' && <p>Do you want to delete?</p>}
        </>
      }
    />
  );
};

export default CreateUserPopup;
