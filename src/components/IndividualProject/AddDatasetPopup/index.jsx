import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '@Components/common/Popup/index';
import individualProjectAction from '@Actions/individualProject';

const AddDatasetPopup = () => {
  const dispatch = useDispatch();
  const openDatasetPopup = useSelector((state) => state.individualProject.openDatasetPopup);
  const handleButtonClick = () => {};
  const handleCloseClick = () => {
    dispatch(individualProjectAction.openDatasetPopup(false));
  };
  return (
    <Popup
      className="pm-modal_cntr_radius"
      header="create ana Theme/Dataset"
      buttonTitle="add to map"
      popup={openDatasetPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      body={
        <div className="mt-15 mb-15">
          <div className="pm-group">
            <label>Theme *</label>
            <input type="text" placeholder="layer name" className="pm-control" />
          </div>
          <div className="pm-group">
            <label>description </label>
            <textarea type="text" placeholder="layer name" className="pm-control" />
          </div>

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
          </div>
        </div>
      }
    />
  );
};

export default AddDatasetPopup;
