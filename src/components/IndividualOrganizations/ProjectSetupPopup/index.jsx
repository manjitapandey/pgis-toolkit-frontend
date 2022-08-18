import React from 'react';
import PropTypes from 'prop-types';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualOrganization';
import { useDispatch, useSelector } from 'react-redux';
import MultistepLabel from '@Components/common/MultistepLabel/index';
import Input from '@Components/common/Input/index';
import BasicInfo from './BasicInfo';
import Location from './Location';

const { setAddBasicData, postProjectAdditionalDataRequest, clearProjectData } = Creators;

const ProjectSetupPopup = ({ popup, setPopup }) => {
  const dispatch = useDispatch();
  const addBasicData = useSelector((state) => state.individualOrganizations.addBasicData);
  const selectedProjectId = useSelector((state) => state.individualOrganizations.selectedProjectId);
  const handleButtonClick = () => {
    dispatch(postProjectAdditionalDataRequest({ id: selectedProjectId, finalData: { ...addBasicData } }));
  };
  const handleCloseClick = () => {
    setPopup(false);
    dispatch(clearProjectData());
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setAddBasicData({ name, value }));
  };
  return (
    <Popup
      header="Create Project Details"
      className="pm-modal_cntr_lg pm-modal_cntr_radius"
      popup={popup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      buttonTitle="Save"
      body={
        <>
          <MultistepLabel />
          <BasicInfo handleChange={handleChange} />
          {/* <Location /> */}
        </>
      }
    />
  );
};

ProjectSetupPopup.propTypes = {
  popup: PropTypes.bool.isRequired,
  setPopup: PropTypes.func.isRequired,
};

export default ProjectSetupPopup;
