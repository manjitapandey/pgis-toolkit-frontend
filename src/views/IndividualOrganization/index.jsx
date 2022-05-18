/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Banner from '@Components/IndividualOrganizations/Banner';
import MapSidebar from '@Components/IndividualOrganizations/MapSidebar/index';
import FilterSidebar from '@Components/IndividualOrganizations/FilterSidebar/index';
import OlMap from '@Components/IndividualOrganizations/OlMap/index';
import UsersData from '@Components/IndividualOrganizations/UsersData/index';
import Tab from '@Components/common/Tab/index';
import { sidebarTabOptions } from '@src/constants/commonData';
import CreateProjectPopup from '@Components/IndividualOrganizations/CreateProjectPopup/index';
import { Creators } from '@Actions/individualOrganization';

const { getIndividualOrganizationDataRequest } = Creators;

const IndividualOrganization = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tab, setTab] = useState('Projects');
  const active = useSelector((state) => state.individualOrganizations.active);
  const mapToggle = useSelector((state) => state.individualOrganizations.mapToggle);

  useEffect(() => {
    dispatch(getIndividualOrganizationDataRequest(id));
  }, []);

  return (
    <main className="mt-15 pl-30 pr-30">
      <div className="container-fluid">
        <Banner />
        <Tab activeTab={tab} options={sidebarTabOptions} setTab={setTab} />
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

        {tab === 'Projects' && (
          <div className="dbd-body">
            <div className={mapToggle ? 'dbd-map is-flex dbd-map_active' : 'dbd-map is-flex'}>
              <MapSidebar />
              <FilterSidebar active={active} />
              <CreateProjectPopup />
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
        {tab === 'Users' && <UsersData />}
      </div>
    </main>
  );
};

export default IndividualOrganization;
