import React, { useState } from 'react';
import Popup from '@Components/common/Popup/index';
import { useDispatch, useSelector } from 'react-redux';
import individualProjectAction from '@Actions/individualProject';
import { layerPopupTabOptions } from '@src/constants/commonData';
import Tab from '@Components/common/Tab/index';
import OpenstreetMap from './OpenstreetMap/index';
import Template from './Template/index';
import Upload from './Upload/index';
import WmsLayer from './WmsLayer/index';

const AddLayerPopup = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Template');
  const openLayerPopup = useSelector((state) => state.individualProject.openLayerPopup);

  const handleButtonClick = () => {};
  const handleCloseClick = () => {
    dispatch(individualProjectAction.openLayerPopup(false));
  };

  return (
    <Popup
      className="pm-modal_cntr_lg pm-modal_cntr_radius"
      header="add layer"
      buttonTitle={activeTab === 'Template' ? 'Add to Template' : 'add to map'}
      popup={openLayerPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      body={
        <>
          <Tab options={layerPopupTabOptions} setTab={setActiveTab} activeTab={activeTab} />
          {activeTab === 'OpenstreetMap' && <OpenstreetMap />}
          {activeTab === 'Template' && <Template />}
          {activeTab === 'Upload' && <Upload />}
          {activeTab === 'WMS layer' && <WmsLayer />}
        </>
      }
    />
  );
};

export default AddLayerPopup;
