/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualProject';
import toastAction from '@Actions/toast';
import Input from '@Components/common/Input/index';

const { setAddThemeData, openDatasetPopup, postThemeDataRequest, postGroupDataRequest } = Creators;

const AddDatasetPopup = ({ id }) => {
  const dispatch = useDispatch();
  const [checkState, setCheckState] = useState(false);
  const openPopup = useSelector((state) => state.individualProject.openDatasetPopup);
  const addThemeData = useSelector((state) => state.individualProject.addThemeData);
  const popupName = useSelector((state) => state.individualProject.popupName);
  const themeId = useSelector((state) => state.individualProject.themeId);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const sameThemeName =
    layerData?.find(
      (item) =>
        item?.name?.toLowerCase()?.replace(/\s/g, '') === addThemeData?.themeName?.toLowerCase().replace(/\s/g, ''),
    )?.name || null;
  const handleButtonClick = () => {
    if (checkState || addThemeData.themeName === '' || addThemeData.groupName === '') {
      dispatch(toastAction.error({ message: 'Fields cannot be empty' }));
    }
    if (!checkState && popupName === 'theme') {
      dispatch(
        postThemeDataRequest({
          finalThemeData: {
            name: addThemeData.themeName,
            project: id,
          },
        }),
      );
    }
    if (!checkState && popupName === 'group') {
      dispatch(
        postGroupDataRequest({
          finalGroupData: {
            name: addThemeData.groupName,
            theme: themeId,
          },
        }),
      );
    }
  };
  const handleCloseClick = () => {
    dispatch(openDatasetPopup({ value: false, name: '' }));
    setCheckState(false);
  };
  const onTextChangeHandler = (event) => {
    setCheckState(true);
    const { name, value } = event.target;
    dispatch(setAddThemeData({ name, value }));
    if (value.length > 1) {
      setCheckState(false);
    }
  };
  return (
    <Popup
      className="pm-modal_cntr_radius"
      header={popupName === 'theme' ? 'Create Theme/Dataset' : 'Add group'}
      buttonTitle={popupName === 'theme' ? 'add to map' : 'add group'}
      popup={openPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      body={
        <div className="mt-15 mb-15">
          {popupName === 'theme' && (
            <Input
              label="Theme *"
              name="themeName"
              value={addThemeData?.themeName}
              onChange={onTextChangeHandler}
              placeholder="Theme Name"
              errorMessage={
                sameThemeName
                  ? '*Same Theme name'
                  : checkState && addThemeData?.themeName === ''
                  ? '*Theme name cannot be empty.'
                  : null
              }
            />
          )}
          {popupName === 'group' && (
            <Input
              label="Group *"
              name="groupName"
              value={addThemeData?.groupName}
              onChange={onTextChangeHandler}
              placeholder="Group Name"
              errorMessage={checkState && addThemeData?.groupName === '' ? '*Theme name cannot be empty.' : null}
            />
          )}
          {/* <TextArea
            label="Description"
            name="layerName"
            value=""
            onChange={onTextAreaChangeHandler}
            placeholder="Layer Name"
          />
          <div className="pm-group">
            <label>Default Color </label>
            <div className="color-list">
              <ul className="is-flex is-start is-align-center is-wrap is-gap-10 ">
                <li style={{ backgroundColor: '#71269C' }} className="is-active" />
                <li style={{ backgroundColor: '#333F99' }} />
                <li style={{ backgroundColor: '#1876D3' }} />
                <li style={{ backgroundColor: '#05786A' }} />
                <li style={{ backgroundColor: '#388E3C' }} />
                <li style={{ backgroundColor: '#F7CE8B' }} />
                <li style={{ backgroundColor: '#FAC02B' }} />
                <li style={{ backgroundColor: '#F47D06' }} />
              </ul>
              <div className="mt-15">
                <a href="" className="is-btn is-btn_link">
                  <span>custom color</span>
                </a>
              </div>
            </div>
      </div> */}
        </div>
      }
    />
  );
};

AddDatasetPopup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddDatasetPopup;
