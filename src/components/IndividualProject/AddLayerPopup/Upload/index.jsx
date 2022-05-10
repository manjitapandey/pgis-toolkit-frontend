import React from 'react';
import UploadFile from '@Components/common/UploadFile/index';

const Upload = () => {
  const onChangeHandler = () => {};
  return (
    <div className="mt-15">
      <h6 className="mb-15">Select a template</h6>
      <UploadFile
        title="upload Vector"
        spanDescription="SHP, CSV, KML, GPX or GEOJSON"
        onChange={onChangeHandler}
        value=""
        name="file"
      />
      <div className="pm-group">
        <p>OR</p>
      </div>
      <UploadFile
        title="upload Raster Date"
        spanDescription="TIFF, JPG or PNG"
        onChange={onChangeHandler}
        value=""
        name="file"
      />
    </div>
  );
};

export default Upload;
