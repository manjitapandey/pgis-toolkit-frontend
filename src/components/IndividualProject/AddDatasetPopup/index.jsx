import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualProject';
import Text from '@Components/common/Text/index';

const { setAddThemeData, openDatasetPopup, postThemeDataRequest } = Creators;

const AddDatasetPopup = ({ id }) => {
  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.individualProject.openDatasetPopup);
  const addThemeData = useSelector((state) => state.individualProject.addThemeData);
  const handleButtonClick = () => {
    dispatch(
      postThemeDataRequest({
        finalThemeData: {
          name: addThemeData.themeName,
          project: id,
        },
      }),
    );
  };
  const handleCloseClick = () => {
    dispatch(openDatasetPopup(false));
  };
  const onTextChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch(setAddThemeData({ name, value }));
  };
  return (
    <Popup
      className="pm-modal_cntr_radius"
      header="create ana Theme/Dataset"
      buttonTitle="add to map"
      popup={openPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      body={
        <div className="mt-15 mb-15">
          <Text
            label="Theme *"
            name="themeName"
            value={addThemeData.themeName}
            onChange={onTextChangeHandler}
            placeholder="Theme Name"
          />
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
