import React from 'react';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualOrganizations';
import { useDispatch, useSelector } from 'react-redux';
import MultistepLabel from '@Components/common/MultistepLabel/index';

const { openProjectPopup } = Creators;

const CreateProjectPopup = () => {
  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.individualOrganizations.openProjectPopup);
  const handleButtonClick = () => {};
  const handleCloseClick = () => {
    dispatch(openProjectPopup(false));
  };
  return (
    <Popup
      header="Create Project Details"
      className="pm-modal_cntr_lg pm-modal_cntr_radius"
      body={
        <>
          <MultistepLabel />
          <div className="pm-group">
            <label className="fw-bold"> phone </label>
            <input type="text" className="pm-control" placeholder="ST-34536" />
          </div>
          <div className="is-flex is-wrap is-gap-15">
            <div className="pm-group is-grow">
              <label className="fw-bold"> password</label>
              <div className="custom-input-group">
                <input type="password" className="pm-control" placeholder="ST-34536" />
                <span className="span-group pr-10">
                  <i className="material-icons">visibility</i>
                </span>
              </div>
            </div>
            <div className="pm-group is-grow">
              <label className="fw-bold is-capitalize"> confirm password</label>
              <div className="custom-input-group">
                <input type="password" className="pm-control" placeholder="Start Date" />
                <span className="span-group pr-10">
                  <i className="material-icons">visibility</i>
                </span>
              </div>
            </div>
          </div>
          <div className="is-flex  is-gap-15 is-wrap">
            <div className="pm-group is-grow">
              <label className="fw-bold is-capitalize"> Project start Date</label>
              <div className="custom-input-group">
                <input type="text" className="pm-control" placeholder="start Date" />
                <span className="span-group pr-10">
                  <i className="material-icons">calendar_today</i>
                </span>
              </div>
            </div>
            <div className="pm-group is-grow">
              <label className="fw-bold is-capitalize">Project end Date</label>
              <div className="custom-input-group">
                <input type="password" className="pm-control" placeholder="end date" />
                <span className="span-group pr-10">
                  <i className="material-icons">calendar_today</i>
                </span>
              </div>
            </div>
          </div>

          <div className="pm-group">
            <label className="fw-bold">Email</label>
            <div className="custom-input-group">
              <span className="span-group pl-10">
                <i className="material-icons">email</i>
              </span>
              <input type="email" className="pm-control" placeholder="ST-34536" />
            </div>
          </div>

          <div className="pm-group">
            <label className="fw-bold">Email</label>
            <textarea type="text" className="pm-control" placeholder="ST-34536" />
          </div>
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

          <div className="pm-table pm-table_border pm-table_sticky">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>SN</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>Cluster Name</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>

                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <p className="fw-bold">WOrld Bicycle Relief</p>
                  </td>

                  <td>
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a className="is-circle is-circle_xs">
                          <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a>
                              <i className="material-icons">edit</i>
                              <span>edit</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="material-icons">delete</i>
                              <span>delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <p className="fw-bold">WOrld Bicycle Relief</p>
                  </td>

                  <td>
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a className="is-circle is-circle_xs">
                          <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a>
                              <i className="material-icons">edit</i>
                              <span>edit</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="material-icons">delete</i>
                              <span>delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <p className="fw-bold">WOrld Bicycle Relief</p>
                  </td>

                  <td>
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a className="is-circle is-circle_xs">
                          <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a>
                              <i className="material-icons">edit</i>
                              <span>edit</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="material-icons">delete</i>
                              <span>delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <p className="fw-bold">WOrld Bicycle Relief</p>
                  </td>

                  <td>
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a className="is-circle is-circle_xs">
                          <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a>
                              <i className="material-icons">edit</i>
                              <span>edit</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="material-icons">delete</i>
                              <span>delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pm-group">
            <div className="is-flex is-center is-column is-align-center">
              <figure>
                <img src="images/map.png" alt="" />
              </figure>
              <p className="fw-bold mt-10">Change layers on Map</p>
            </div>
          </div>
        </>
      }
      popup={openPopup}
      handleCloseClick={handleCloseClick}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default CreateProjectPopup;
