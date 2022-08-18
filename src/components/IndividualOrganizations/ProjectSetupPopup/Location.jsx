import React from 'react';
import image from '@Assets/images/map.png';

const Location = () => (
  <>
    <div className="pm-group">
      <label className="is-capitalize fw-bold">Choose the Geographic Boundary</label>
      <div className="options is-flex is-start is-align-center">
        <div className="options-btn options-btn_active">Upload Area</div>
        <div className="options-btn">Draw Area on map</div>
      </div>
    </div>
    <div className="pm-group">
      <label className="is-capitalize fw-bold">
        Upload Organization Logo <sup>*</sup>
      </label>
      <div className="pmupload-btn is-flex is-start is-align-center">
        <label htmlFor="upload " className="is-flex is-align-center is-btn is-btn_icon is-btn_link">
          <i className="material-icons">upload</i>
          <span>upload</span>
          <input type="file" id="upload" />
        </label>
        <span className="fs-md">SHP, CSV, KML, GPX or GEOJSON</span>
      </div>
    </div>
    <div className="pm-group">
      <div className="pmupload-file is-gap-15 is-border">
        <div className="pmupload-file_content is-flex is-start is-align-center">
          <div className="is-circle is-circle_xs is-bg-white">
            <i className="material-icons clr-primary-500">description</i>
          </div>
          <div className="pmupload-file_name ml-10">
            <p className="fw-600">Area_doc-file.gson</p>
            <span className="fs-md">2.4 MB</span>
          </div>
        </div>
        <div className="pmupload-file_icons is-flex is-gap-10">
          <button className="is-btn is-btn_link pd-0" type="button">
            <i className="material-icons">download</i>
          </button>
          <button className="is-btn is-btn_link pd-0" type="button">
            <i className="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
    <div className="pm-group">
      <div className="is-flex is-center is-column is-align-center">
        <figure>
          <img src={image} alt="" />
        </figure>
        <p className="fw-bold mt-10">Change layers on Map</p>
      </div>
    </div>
  </>
);

export default Location;
