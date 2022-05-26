/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '@Actions/individualProject';
import Text from '@Components/common/Text/index';
import UploadFile from '@Components/common/UploadFile/index';
import UploadContent from '@Components/common/UploadContent/index';
import Select from '@Components/common/Select/index';
import { selectOptions } from '@src/constants/commonData';
import CustomSwitch from '@Components/common/CustomSwitch/index';

const { setAddUploadDataFile, setAddUploadData, deleteUploadDataFile } = Creators;

const Upload = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);
  const [checkState, setCheckState] = useState(false);
  const addUploadData = useSelector((state) => state.individualProject.addUploadData);
  const file = useSelector((state) => state.individualProject.file);
  const layerData = useSelector((state) => state.individualProject.layerData);
  const sameLayerName = layerData
    ?.map((data) => data?.options?.map((element) => element?.name))
    ?.reduce((arr, item) => [...arr, ...item], [])
    ?.find(
      (item) => item?.toLowerCase()?.replace(/\s/g, '') === addUploadData?.layerName?.toLowerCase().replace(/\s/g, ''),
    );

  const onChangeHandler = (event) => {
    const { files } = event.target;
    dispatch(setAddUploadDataFile({ value: files[0] }));
  };
  const onTextChangeHandler = (event) => {
    setCheckState(true);
    const { name, value } = event.target;
    dispatch(setAddUploadData({ name, value }));
  };
  const onCheckboxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setAddUploadData({ name, value: checked ? 'True' : 'False' }));
  };
  const handleSelect = (event) => {
    const { name, value, id } = event.target;
    dispatch(setAddUploadData({ name, value }));
  };
  const handleDelete = () => {
    dispatch(deleteUploadDataFile());
  };

  useEffect(() => {
    setActive('');
  }, []);
  return (
    <div className="mt-15">
      <h6 className="mb-15">Select a template</h6>
      <button type="button" className="is-btn is-btn_link is-btn_icon" onClick={() => setActive('vector')}>
        <i className="material-icons-outlined">upload</i>
        <span>Upload Vector</span>
      </button>
      <div className="pm-group">
        <p>OR</p>
      </div>
      <button type="button" className="is-btn is-btn_link is-btn_icon" onClick={() => setActive('raster')}>
        <i className="material-icons-outlined">upload</i>
        <span>Upload Raster Data</span>
      </button>
      {/* <UploadButton
        title="upload Raster Date"
        spanDescription="TIFF, JPG or PNG"
        onChange={onChangeHandler}
        value=""
        name="file"
  /> */}
      <div className="mt-15 mb-15" style={active ? { display: 'inline' } : { dispaly: 'none' }}>
        {active === 'vector' ? (
          <>
            <h6 className="mb-15">Upload Vector</h6>
            <UploadFile spanDescription="TIFF, JPG or PNG" onChange={onChangeHandler} value="" name="file" />
            {file && <UploadContent fileName={file.name} fileSize={file.size} handleDelete={handleDelete} />}
            <Text
              label="Layer Name"
              name="layerName"
              value={addUploadData?.layerName}
              onChange={onTextChangeHandler}
              placeholder="Layer Name"
              errorMessage={
                sameLayerName
                  ? '*Same layer name'
                  : checkState && addUploadData?.layerName === ''
                  ? '*Layer name cannot be empty.'
                  : null
              }
            />
            <div className="is-flex is-start is-align-start is-gap-15 is-wrap">
              <Text
                label="Theme"
                name="theme"
                value={addUploadData?.theme}
                onChange={onTextChangeHandler}
                className1="is-grow"
                readOnly
              />

              {/* <div className="pm-group is-grow">
                <label>Group</label>
                <Select
                  className="pm-select_100"
                  selected={addUploadData?.group || 'Choose'}
                  options={selectOptions}
                  value={addUploadData?.group}
                  handleSelect={(value, id) => handleSelect({ target: { name: 'group', value, id } })}
                />
        </div> */}
            </div>
            <CustomSwitch
              id="1"
              label="Default"
              onChange={onCheckboxChange}
              value={addUploadData?.default === 'True'}
              checked={addUploadData?.default === 'True'}
              name="default"
            />
          </>
        ) : (
          <h6 className="mb-15">Upload Raster</h6>
        )}
      </div>
    </div>
  );
};

export default Upload;
