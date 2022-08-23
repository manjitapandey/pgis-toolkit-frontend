import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '@Actions/individualOrganization';
import image from '@Assets/images/map.png';
import Select from '@Components/common/Select';
import OptionsButton from '@Components/common/OptionsButton/index';
import { optionSelectList } from '@src/constants/commonData';
import UploadButton from '@Components/common/UploadButton/index';
import UploadContent from '@Components/common/UploadContent/index';
import OLMap from './OlMap';

const { getProjectStateDataRequest, getSelectedLocation, getSelectedTab, setAddUploadFile } = Creators;

const Location = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.individualOrganizations.countryData);
  const stateData = useSelector((state) => state.individualOrganizations.stateData);
  const selectedCountry = useSelector((state) => state.individualOrganizations.selectedCountry);
  const selectedState = useSelector((state) => state.individualOrganizations.selectedState);
  const selectedTab = useSelector((state) => state.individualOrganizations.selectedTab);
  const file = useSelector((state) => state.individualOrganizations.file);
  console.log(file, 'file');
  const handleCountrySelect = (data) => {
    dispatch(getProjectStateDataRequest({ country: [data.id] }));
    dispatch(getSelectedLocation({ country: data, states: '' }));
  };
  const handleStateSelect = (data) => {
    dispatch(getSelectedLocation({ country: selectedCountry, states: data }));
  };
  const onChangeHandler = (event) => {
    const { files } = event.target;
    dispatch(setAddUploadFile({ value: files[0] }));
  };
  const handleDelete = () => {
    dispatch(setAddUploadFile({ value: null }));
  };
  return (
    <div className="mt-15">
      <div className="pmupload-btn is-flex is-start is-align-center mb-15">
        <Select
          options={countryData}
          className="pm-select_100 mr-15"
          selected={selectedCountry.name || 'Country'}
          handleSelect={handleCountrySelect}
        />
        <Select
          options={stateData}
          selected={selectedState.name || 'State'}
          className="pm-select_100"
          handleSelect={handleStateSelect}
        />
      </div>
      <OptionsButton
        options={optionSelectList}
        selected={selectedTab}
        setActiveTab={getSelectedTab}
        label="Choose the Geographic Boundary"
      />
      {selectedTab === 'Upload Area' && (
        <>
          <UploadButton label="Upload" title="Upload file" onChange={onChangeHandler} value="" name="file" />
          {file && <UploadContent fileName={file.name} fileSize={file.size} handleDelete={handleDelete} />}
        </>
      )}
      {selectedTab === 'Draw Area on Map' && (
        <>
          <OLMap />
          {/* <div className="pm-group">
            <div className="is-flex is-center is-column is-align-center">
              <figure>
                <img src={image} alt="" />
              </figure>
              <p className="fw-bold mt-10">Change layers on Map</p>
            </div>
      </div> */}
        </>
      )}
    </div>
  );
};

export default Location;
