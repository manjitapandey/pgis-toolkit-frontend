import React from 'react';
import Popup from '@Components/common/Popup/index';
import { useDispatch, useSelector } from 'react-redux';
import individualProjectAction from '@Actions/individualProject';

const AddLayerPopup = () => {
  const dispatch = useDispatch();
  const openLayerPopup = useSelector((state) => state.individualProject.openLayerPopup);

  const handleButtonClick = () => {};
  const handleCloseClick = () => {
    dispatch(individualProjectAction.openLayerPopup(false));
  };

  return (
    <Popup
      className="pm-modal_cntr_lg pm-modal_cntr_radius"
      header="add layer"
      buttonTitle="add to map"
      popup={openLayerPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
      body={
        <>
          <ul className="pm-tab pm-tab_btm-border pm-tab_border ">
            <li>
              <a href="#" className="is-active">
                openstreetmap
              </a>
            </li>
            <li>
              <a href="#">Template</a>
            </li>
            <li>
              <a href="#">Upload</a>
            </li>
            <li>
              <a href="#">Custom</a>
            </li>
            <li>
              <a href="#">VMS Layer</a>
            </li>
          </ul>
          <div className="mt-15">
            <h6 className="mb-15">Data on OSM</h6>
            <ul className="is-list">
              <li>
                <div className="pm-checkbox ">
                  <input type="checkbox" id="1" />
                  <label htmlFor="1" className="is-grow is-flex is-start is-align-start">
                    <span className="is-grow is-trim-2">Health</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pm-checkbox ">
                  <input type="checkbox" id="2" />
                  <label htmlFor="2" className="is-grow is-flex is-start is-align-start">
                    <span className="is-grow is-trim-2">Education</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pm-checkbox ">
                  <input type="checkbox" id="3" />
                  <label htmlFor="3" className="is-grow is-flex is-start is-align-start">
                    <span className="is-grow is-trim-2">Road</span>
                  </label>
                </div>
              </li>
            </ul>
            <ul className="pm-list pm-list_border is-border pm-list_search is-overflow">
              <li className="is-flex is-start is-align-start is-selected">
                <div className="is-grow">
                  <p className="fw-600 mb-05">Multi-Hazard Risk Assessment Form</p>
                  <div className="is-flex is-start is-gap-15">
                    <span>Attributes:</span>
                    <span>-</span>
                    <span className="fs-md clr-body-600">Lenght, Surface, Width</span>
                  </div>
                </div>
                <div className="is-grow">Line</div>
              </li>
              <li className="is-flex is-start is-align-start is-selected">
                <div className="is-grow">
                  <p className="fw-600 mb-05">Multi-Hazard Risk Assessment Form</p>
                  <div className="is-flex is-start is-gap-15">
                    <span>Attributes:</span>
                    <span>-</span>
                    <span className="fs-md clr-body-600">Lenght, Surface, Width</span>
                  </div>
                </div>
                <div className="is-grow">Line</div>
              </li>
            </ul>
          </div>
          <div className="mt-15 mb-15">
            <div className="pm-group">
              <label>Layer Name</label>
              <input type="text" placeholder="layer name" className="pm-control" />
            </div>
            <div className="pm-group">
              <label>Feature Type</label>
              <div className="pm-select pm-select_100">
                <div className="pm-select_item">
                  <span>Choose </span>
                </div>
                <ul className="pm-select_list left-dropdown">
                  <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
                  <li data-value="Gandaki">Gandaki</li>
                  <li data-value="Lumbini">Lumbini</li>
                  <li data-value="Bagmati">Gandaki</li>
                </ul>
              </div>
            </div>
            <div className="is-flex is-start is-align-start is-gap-15 is-wrap">
              <div className="pm-group is-grow">
                <div className="pm-select pm-select_100 ">
                  <div className="pm-select_item ">
                    <span>Choose </span>
                  </div>
                  <ul className="pm-select_list left-dropdown">
                    <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
                    <li data-value="Gandaki">Gandaki</li>
                    <li data-value="Lumbini">Lumbini</li>
                    <li data-value="Bagmati">Gandaki</li>
                  </ul>
                </div>
              </div>
              <div className="is-flex is-start is-align-start is-grow is-gap-15 is-wrap">
                <div className="pm-group is-grow">
                  <div className="pm-select pm-select_100 ">
                    <div className="pm-select_item ">
                      <span>Type </span>
                    </div>
                    <ul className="pm-select_list left-dropdown">
                      <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
                      <li data-value="Gandaki">Gandaki</li>
                      <li data-value="Lumbini">Lumbini</li>
                      <li data-value="Bagmati">Gandaki</li>
                    </ul>
                  </div>
                </div>
                <div className="pm-group is-grow">
                  <div className="pm-select pm-select_100 is-grow">
                    <div className="pm-select_item ">
                      <span>Unit </span>
                    </div>
                    <ul className="pm-select_list left-dropdown">
                      <li data-value="Bagmati pardesh">Bagmati Pardesh</li>
                      <li data-value="Gandaki">Gandaki</li>
                      <li data-value="Lumbini">Lumbini</li>
                      <li data-value="Bagmati">Gandaki</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="is-btn is-btn_link is-btn_icon">
              <i className="material-icons">add_circle_outline</i>
              <span>add</span>
            </button>
          </div>

          <div className="pm-group">
            <div className="pmupload-btn is-flex is-start is-align-center">
              <label htmlFor="upload " className="is-flex is-align-center is-btn is-btn_icon is-btn_link">
                <i className="material-icons">upload</i>
                <span>upload Vector</span>
                <input type="file" id="upload" />
              </label>
              <span className="fs-md">SHP, CSV, KML, GPX or GEOJSON</span>
            </div>
          </div>
          <div className="pm-group">
            <p>OR</p>
          </div>
          <div className="pm-group">
            <div className="pmupload-btn is-flex is-start is-align-center">
              <label htmlFor="upload " className="is-flex is-align-center is-btn is-btn_icon is-btn_link">
                <i className="material-icons">upload</i>
                <span>upload Raster Date</span>
                <input type="file" id="upload" />
              </label>
              <span className="fs-md">TIFF, JPG or PNG</span>
            </div>
          </div>
        </>
      }
    />
  );
};

export default AddLayerPopup;
