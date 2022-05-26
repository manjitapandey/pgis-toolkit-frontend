/* eslint-disable  no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Popup from '@Components/common/Popup/index';
import { useDispatch, useSelector } from 'react-redux';
import individualProjectAction, { Creators } from '@Actions/individualProject';
import toastAction from '@Actions/toast';
import { layerPopupTabOptions } from '@src/constants/commonData';
import Tab from '@Components/common/Tab/index';
import OpenstreetMap from './OpenstreetMap/index';
import Template from './Template/index';
import Upload from './Upload/index';
import WmsLayer from './WmsLayer/index';

const { openLayerPopup, clearData, postUploadDataRequest, getTaskResponseRequest } = Creators;

const AddLayerPopup = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Template');
  const layerData = useSelector((state) => state.individualProject.layerData);
  const taskId = useSelector((state) => state.individualProject.taskId);
  const layerId = useSelector((state) => state.individualProject.layerId);
  const taskResponse = useSelector((state) => state.individualProject.taskResponse);
  const taskLoading = useSelector((state) => state.individualProject.taskLoading);
  const layerPopup = useSelector((state) => state.individualProject.openLayerPopup);
  const finalUploadData = useSelector((state) => state.individualProject.finalUploadData);
  const sameLayerName = layerData
    ?.map((data) => data?.options?.map((element) => element?.name))
    ?.reduce((arr, item) => [...arr, ...item], [])
    ?.find(
      (item) => item?.toLowerCase()?.replace(/\s/g, '') === finalUploadData?.name?.toLowerCase().replace(/\s/g, ''),
    );
  const handleButtonClick = () => {
    if (activeTab === 'Upload') {
      if (sameLayerName) {
        dispatch(toastAction.error({ message: 'Layer name exists' }));
      } else {
        dispatch(postUploadDataRequest({ finalUploadData }));
      }
    }
  };

  const handleCloseClick = () => {
    setActiveTab('Template');
    dispatch(openLayerPopup(false));
    dispatch(clearData());
  };

  useEffect(() => {
    let timer = null;
    if (taskId) {
      timer = setInterval(() => {
        dispatch(getTaskResponseRequest({ task_id: taskId }));
      }, 3000);
    }
    if (layerId) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, taskId, taskResponse]);

  return (
    <Popup
      className="pm-modal_cntr_lg pm-modal_cntr_radius"
      header="add layer"
      buttonTitle={activeTab === 'Template' ? 'Add to Template' : 'add to map'}
      popup={layerPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      isLoading={taskLoading}
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
