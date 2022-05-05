import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Banner from '@Components/IndividualOrganizations/Banner';
import MapSidebar from '@Components/IndividualOrganizations/MapSidebar/index';
import FilterSidebar from '@Components/IndividualOrganizations/FilterSidebar/index';
import OlMap from '@Components/IndividualOrganizations/OlMap/index';
import UsersData from '@Components/IndividualOrganizations/UsersData/index';

const IndividualOrganization = () => {
  const [tab, setTab] = useState('projects');
  const active = useSelector((state) => state.individualOrganizations.active);
  const mapToggle = useSelector((state) => state.individualOrganizations.mapToggle);

  const handleClick = (value) => {
    setTab(value);
  };
  return (
    <main className="mt-30">
      <div className="container-fluid">
        <Banner />
        <ul className="pm-tab pm-tab_border pm-tab_btm-border">
          <li>
            <a className={tab === 'projects' ? 'is-active' : ''} onClick={() => handleClick('projects')} key="projects">
              Projects
            </a>
          </li>
          <li>
            <a className={tab === 'users' ? 'is-active' : ''} onClick={() => handleClick('users')} key="users">
              users
            </a>
          </li>
        </ul>
        <div className="pm-modal" id="warning-modal">
          <div className="pm-modal_cntr pm-modal_cntr_sm">
            <div className="pm-modal_header is-flex is-between is-gap-15">
              <div className="is-flex is-start is-align-center is-gap-10">
                <div className="is-square si-square-red is-square_xs">
                  <svg
                    id="Group_4868"
                    data-name="Group 4868"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.086"
                    height="29.785"
                    viewBox="0 0 24.086 29.785"
                  >
                    <path
                      id="Path_10262"
                      data-name="Path 10262"
                      d="M66.839,3.569H62.2a4.031,4.031,0,0,0-8.008,0H49.558a3.407,3.407,0,0,0-3.4,3.4v.175a3.406,3.406,0,0,0,2.15,3.161V26.383a3.407,3.407,0,0,0,3.4,3.4h12.98a3.407,3.407,0,0,0,3.4-3.4V10.307a3.406,3.406,0,0,0,2.15-3.161V6.972A3.407,3.407,0,0,0,66.839,3.569ZM58.2,1.614a2.422,2.422,0,0,1,2.373,1.955H55.825A2.422,2.422,0,0,1,58.2,1.614Zm8.279,24.769a1.791,1.791,0,0,1-1.789,1.789H51.708a1.791,1.791,0,0,1-1.789-1.789V10.549H66.477Zm2.15-19.236a1.791,1.791,0,0,1-1.789,1.789H49.558a1.791,1.791,0,0,1-1.789-1.789V6.972a1.791,1.791,0,0,1,1.789-1.789H66.839a1.791,1.791,0,0,1,1.789,1.789v.175Z"
                      transform="translate(-46.155)"
                      fill="#ff0f0f"
                    />
                    <path
                      id="Path_10263"
                      data-name="Path 10263"
                      d="M158.882,260.27a.807.807,0,0,0,.807-.807v-9.085a.807.807,0,1,0-1.614,0v9.085A.807.807,0,0,0,158.882,260.27Z"
                      transform="translate(-151.165 -234.162)"
                      fill="#ff0f0f"
                    />
                    <path
                      id="Path_10264"
                      data-name="Path 10264"
                      d="M228.952,260.27a.807.807,0,0,0,.807-.807v-9.085a.807.807,0,1,0-1.614,0v9.085A.807.807,0,0,0,228.952,260.27Z"
                      transform="translate(-216.909 -234.162)"
                      fill="#ff0f0f"
                    />
                    <path
                      id="Path_10265"
                      data-name="Path 10265"
                      d="M299.021,260.27a.807.807,0,0,0,.807-.807v-9.085a.807.807,0,1,0-1.614,0v9.085A.807.807,0,0,0,299.021,260.27Z"
                      transform="translate(-282.652 -234.162)"
                      fill="#ff0f0f"
                    />
                  </svg>
                </div>
                <h5>Delete Site</h5>
              </div>
              <div className="is-flex is-end is-align-center">
                <a className="pm-modal_close">
                  <i className="material-icons">close</i>
                </a>
              </div>
            </div>
            <div className="pm-modal_body">
              <p>Are you sure you want to delete this site and all it’s contents?</p>
            </div>
            <div className="pm-modal_footer is-flex is-center is-gap-10">
              <button className="is-btn" type="button">
                cancel
              </button>
              <button className="is-btn is-btn_red" type="button">
                Delete
              </button>
            </div>
          </div>
        </div>

        {tab === 'projects' && (
          <div className="dbd-body">
            <div className={mapToggle ? 'dbd-map is-flex dbd-map_active' : 'dbd-map is-flex'}>
              <MapSidebar />
              <FilterSidebar active={active} />
              <div className="pm-modal" id="create-project">
                <div className="pm-modal_cntr pm-modal_cntr_lg pm-modal_cntr_radius">
                  <div className="pm-modal_header is-gap-15">
                    <h3 className="is-grow">Create Project Details</h3>
                    <div className="is-flex is-end is-align-center">
                      <a className="pm-modal_close">
                        <i className="material-icons">close</i>
                      </a>
                    </div>
                  </div>
                  <div className="pm-modal_body">
                    <ul className="multistep is-flex is-between is-align-center is-wrap">
                      <li className=" is-complete is-flex is-center is-align-center is-column flex-1">
                        <span className=" multistep-number is-flex is-center is-align-center is-column material-icons">
                          check
                        </span>
                        <div className="multistep-lebel mt-10">Basic Info</div>
                      </li>
                      <li className="is-flex is-center is-align-center is-column is-active flex-1">
                        <span className="multistep-number is-flex is-center is-align-center is-column ">2</span>
                        <div className="multistep-lebel mt-10">Location</div>
                      </li>
                      <li className="is-flex is-center is-align-center is-column flex-1">
                        <span className=" multistep-number is-flex is-center is-align-center is-column ">3</span>
                        <div className="multistep-lebel mt-10">Document</div>
                      </li>
                      <li className="is-flex is-center is-align-center is-column flex-1">
                        <span className="multistep-number is-flex is-center is-align-center is-column ">4</span>
                        <div className="multistep-lebel mt-10">Data</div>
                      </li>
                      <li className="is-flex is-center is-align-center is-column flex-1">
                        <span className="multistep-number is-flex is-center is-align-center is-column  ">5</span>
                        <div className="multistep-lebel mt-10">Map</div>
                      </li>
                    </ul>
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
                  </div>

                  <div className="pm-modal_footer is-flex is-start is-gap-10">
                    <button className="is-btn is-btn_link" type="button">
                      <span>Back</span>
                    </button>
                    <div className="is-flex is-center is-align-center is-grow pr-30">
                      <button className="is-btn is-btn_primary" type="button">
                        invaite & save
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pm-modal" id="create-project">
                <div className="pm-modal_cntr pm-modal_cntr_lg pm-modal_cntr_radius">
                  <div className="pm-modal_header is-gap-15">
                    <h3 className="is-grow">Create Project</h3>
                    <div className="is-flex is-end is-align-center">
                      <a className="pm-modal_close">
                        <i className="material-icons">close</i>
                      </a>
                    </div>
                  </div>
                  <div className="pm-modal_body">
                    <div className="row">
                      <div className="grid-md-6">
                        <div className="pm-group">
                          <label className="fw-bold">Name </label>
                          <input type="text" className="pm-control" placeholder="ST-34536" />
                        </div>
                        <div className="pm-group">
                          <label className="fw-bold"> Role in Organization</label>
                          <input type="text" className="pm-control" placeholder="ST-34536" />
                        </div>
                      </div>
                      <div className="grid-md-6">
                        <div className="pm-group">
                          <label className="is-capitalize fw-bold">
                            Upload Organization Logo<sup>*</sup>
                          </label>
                          <div className="is-flex is-start is-align-center">
                            <figure className="is-circle_md is-circle_img is-circle">
                              <img src="images/user.png" alt="" />
                            </figure>
                            <div className="pmupload-btn is-flex is-start is-align-center">
                              <label
                                htmlFor="upload "
                                className="is-flex is-align-center is-btn is-btn_icon is-btn_link"
                              >
                                <i className="material-icons">upload</i>
                                <span>upload photo</span>
                                <input type="file" id="upload" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <div className="is-flex is-wrap is-gap-15">
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
                  </div>
                  <div className="pm-modal_footer is-flex is-center is-gap-10">
                    <button className="is-btn is-btn_primary" type="button">
                      invaite & save
                    </button>
                  </div>
                </div>
              </div>
              <OlMap />
            </div>
          </div>
        )}
        {tab === 'users' && <UsersData />}
      </div>
    </main>
  );
};

export default IndividualOrganization;
