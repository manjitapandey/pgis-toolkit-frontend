import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualOrganization';
import { Creators as PopupCreator } from '@Actions/popup';
import Tab from '@Components/common/Tab/index';
import { projectPopupTabOptions } from '@src/constants/commonData';
import MultistepLabel from '@Components/common/MultistepLabel/index';
import BasicInfo from './BasicInfo';
import Location from './Location';

const { setAddBasicData, postProjectAdditionalDataRequest, clearProjectData, deleteProjectDataRequest } = Creators;
const { openPopup } = PopupCreator;

const ProjectSetupPopup = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Basic Info');
  const addBasicData = useSelector((state) => state.individualOrganizations.addBasicData);
  const popup = useSelector((state) => state.popup.popup);
  const popupType = useSelector((state) => state.popup.popupType);
  const selectedProjectId = useSelector((state) => state.individualOrganizations.selectedProjectId);
  const selectedProjectName = useSelector((state) => state.individualOrganizations.selectedProjectName);
  const selectedCountry = useSelector((state) => state.individualOrganizations.selectedCountry);
  const selectedState = useSelector((state) => state.individualOrganizations.selectedState);
  const geomData = useSelector((state) => state.individualOrganizations.geomData);
  const selectedTab = useSelector((state) => state.individualOrganizations.selectedTab);
  const file = useSelector((state) => state.individualOrganizations.file);
  const userData = useSelector((state) => state.verifyUser.userData);

  const handleButtonClick = () => {
    if (popupType === 'Edit' && activeTab === 'Basic Info')
      dispatch(postProjectAdditionalDataRequest({ id: selectedProjectId, finalData: { ...addBasicData } }));
    if (popupType === 'Edit' && activeTab === 'Location')
      dispatch(
        postProjectAdditionalDataRequest({
          id: selectedProjectId,
          finalData: {
            country: JSON.stringify([selectedCountry.id]),
            state: JSON.stringify([selectedState.id]),
            location_wkt: JSON.stringify([geomData]),
            location_type: selectedTab === 'Upload Area' ? 'File Upload' : 'Custom Draw',
            file: geomData ? null : file,
            file_type: file ? 'Shapefile' : '',
          },
        }),
      );

    if (popupType === 'Delete') dispatch(deleteProjectDataRequest({ id: selectedProjectId }));
  };
  const handleCloseClick = () => {
    dispatch(openPopup(false));
    dispatch(clearProjectData());
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setAddBasicData({ name, value }));
  };
  return (
    <Popup
      header={popupType === 'Edit' ? 'Create Project Details' : 'Delete Project Details'}
      className={
        popupType === 'Edit' ? 'pm-modal_cntr_lg pm-modal_cntr_radius' : 'pm-modal_cntr_sm pm-modal_cntr_radius'
      }
      popup={popup}
      handleCloseClick={handleCloseClick}
      displayClose={!userData}
      handleButtonClick={handleButtonClick}
      buttonTitle="Save"
      body={
        <>
          {popupType === 'Edit' && (
            <>
              {/* <MultistepLabel /> */}
              <Tab options={projectPopupTabOptions} setTab={setActiveTab} activeTab={activeTab} />
              {activeTab === 'Basic Info' && <BasicInfo handleChange={handleChange} />}
              {activeTab === 'Location' && <Location />}
            </>
          )}
          {popupType === 'Delete' && <p>{`Do you want to delete ${selectedProjectName}?`}</p>}
        </>
      }
    />
  );
};

export default ProjectSetupPopup;
