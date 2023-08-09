/* eslint-disable no-control-regex */
/* eslint-disable prefer-regex-literals */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualOrganization';
import toastAction from '@Actions/toast';
import Input from '@Components/common/Input/index';
import ListData from '@Components/Organizations/ListData/index';

const {
  openProjectPopup,
  getEmailList,
  filterEmailList,
  setAddProjectData,
  postProjectDataRequest,
  clearProjectData,
  setLoading,
} = Creators;

const CreateProjectPopup = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [validMail, setValidMail] = useState(false);
  const openPopup = useSelector((state) => state.individualOrganizations.openProjectPopup);
  const emailList = useSelector((state) => state.individualOrganizations.emailList);
  const loading = useSelector((state) => state.individualOrganizations.loading);
  const addProjectData = useSelector((state) => state.individualOrganizations.addProjectData);
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'projectEmail') {
      setValidMail(regex.test(value));
    }
    dispatch(setAddProjectData({ name, value }));
  };
  const { projectName, projectEmail } = addProjectData;

  const handleButtonClick = () => {
    if (!projectName) {
      dispatch(toastAction.error({ message: 'Name cannot be empty' }));
    }
    if (!validMail) {
      dispatch(toastAction.error({ message: 'Please enter valid email address.' }));
    }
    if (validMail) {
      dispatch(setLoading(true));
      dispatch(
        postProjectDataRequest({
          finalData: { organization: id, project_name: projectName, email: JSON.stringify(emailList) },
        }),
      );
    }
  };
  const handleCloseClick = () => {
    dispatch(openProjectPopup(false));
    dispatch(clearProjectData());
    dispatch(setLoading(false));
  };
  const handleAddClick = () => {
    if (validMail) {
      dispatch(getEmailList([...emailList, projectEmail]));
    }
  };

  return (
    <Popup
      header="Create Project Details"
      className="pm-modal_cntr_md pm-modal_cntr_radius"
      popup={openPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      buttonTitle="Add Project"
      isLoading={loading}
      body={
        <>
          <Input
            label="Name of Project"
            placeholder="Project name"
            onChange={handleChange}
            value={projectName}
            name="projectName"
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
                  value={projectEmail}
                  name="projectEmail"
                />
              </div>
              <div className="is-circle is-circle_xs is-circle_hover" onClick={handleAddClick}>
                <i className="material-icons-outlined">add_circle_outline</i>
              </div>
            </div>
            {emailList?.length ? <ListData options={emailList} onClick={filterEmailList} /> : <></>}
          </div>
        </>
      }
    />
  );
};

export default CreateProjectPopup;
