import React, { useEffect, useState } from 'react';
import UploadButton from '@Components/common/UploadButton/index';
import Text from '@Components/common/Text/index';
import UploadFile from '@Components/common/UploadFile/index';
import { Creators } from '@Actions/individualProject';
import { useDispatch, useSelector } from 'react-redux';

const { setAddUploadDataFile, setAddUploadData } = Creators;

const Upload = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);
  const addUploadData = useSelector((state) => state.individualProject.addUploadData);

  const onChangeHandler = (event) => {
    const { files } = event.target;
    dispatch(setAddUploadDataFile({ value: files[0] }));
  };
  const onTextChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch(setAddUploadData({ name, value }));
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
            <Text
              label="Layer Name"
              name="layerName"
              value={addUploadData.layerName}
              onChange={onTextChangeHandler}
              placeholder="Layer Name"
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
