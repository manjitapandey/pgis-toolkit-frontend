import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '@Components/common/Popup/index';
import { Creators } from '@Actions/individualProject';
import Search from '@Components/common/Search/index';

const { openDetailPopup } = Creators;

const DetailDataPopup = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.detailPopup.detailPopup);
  const handleCloseClick = () => {
    dispatch(openDetailPopup(false));
  };
  return (
    <Popup
      tagId="explore"
      className="pm-modal_cntr_xxl"
      header="Road Crash/Accident Data"
      popup={popup}
      handleCloseClick={handleCloseClick}
      body={
        <>
          <div className="is-flex is-start is-align-center is-gap-15 mt-15 mb-15">
            <Search />
          </div>
          <div className="pm-table">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>ID</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="is-active">
                    <div className="is-flex is-start is-gap-10">
                      <span>Name</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">expand_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>address</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>Type of road obstracle</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>LAT. (Y COORD.)</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>LONG. (X COORD.)</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>ELEV. (Z COORD.)</span>
                      <div className="pm-table_arrow">
                        <div className="updown-arrow">
                          <i className="material-icons">unfold_more</i>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="is-flex is-start is-gap-10">
                      <span>TOTAL LENGTH</span>
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
                  <td>
                    <span>ID-2456</span>
                  </td>
                  <td>
                    <span>Road Crash 1</span>
                  </td>
                  <td>
                    <span>32 Street, Kenyatta Avenue</span>
                  </td>
                  <td>
                    <span>Pothole</span>
                  </td>
                  <td>
                    <span>-1.2847917285756245</span>
                  </td>
                  <td>
                    <span>36.82012434916634</span>
                  </td>
                  <td>
                    <span>3.2847917285756245</span>
                  </td>
                  <td>
                    <span>12 meters</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td className="is-sticky-td">
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a href="#" className="is-circle is-circle_xs">
                          <i className="material-icons-outlined">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">edit</i>
                              <span>Edit</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">manage_accounts</i>
                              <span>Assign</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="clr-primary-500">
                              <i className="material-icons-outlined">delete</i>
                              <span>Delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>ID-2456</span>
                  </td>
                  <td>
                    <span>Road Crash 1</span>
                  </td>
                  <td>
                    <span>32 Street, Kenyatta Avenue</span>
                  </td>
                  <td>
                    <span>Pothole</span>
                  </td>
                  <td>
                    <span>-1.2847917285756245</span>
                  </td>
                  <td>
                    <span>36.82012434916634</span>
                  </td>
                  <td>
                    <span>3.2847917285756245</span>
                  </td>
                  <td>
                    <span>12 meters</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td className="is-sticky-td">
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a href="#" className="is-circle is-circle_xs">
                          <i className="material-icons-outlined">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">edit</i>
                              <span>Edit</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">manage_accounts</i>
                              <span>Assign</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="clr-primary-500">
                              <i className="material-icons-outlined">delete</i>
                              <span>Delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>ID-2456</span>
                  </td>
                  <td>
                    <span>Road Crash 1</span>
                  </td>
                  <td>
                    <span>32 Street, Kenyatta Avenue</span>
                  </td>
                  <td>
                    <span>Pothole</span>
                  </td>
                  <td>
                    <span>-1.2847917285756245</span>
                  </td>
                  <td>
                    <span>36.82012434916634</span>
                  </td>
                  <td>
                    <span>3.2847917285756245</span>
                  </td>
                  <td>
                    <span>12 meters</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td className="is-sticky-td">
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a href="#" className="is-circle is-circle_xs">
                          <i className="material-icons-outlined">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">edit</i>
                              <span>Edit</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">manage_accounts</i>
                              <span>Assign</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="clr-primary-500">
                              <i className="material-icons-outlined">delete</i>
                              <span>Delete</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>ID-2456</span>
                  </td>
                  <td>
                    <span>Road Crash 1</span>
                  </td>
                  <td>
                    <span>32 Street, Kenyatta Avenue</span>
                  </td>
                  <td>
                    <span>Pothole</span>
                  </td>
                  <td>
                    <span>-1.2847917285756245</span>
                  </td>
                  <td>
                    <span>36.82012434916634</span>
                  </td>
                  <td>
                    <span>3.2847917285756245</span>
                  </td>
                  <td>
                    <span>12 meters</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td className="is-sticky-td">
                    <div className="is-flex is-end">
                      <div className="pm-dropdown pm-dropdown_option pm-dropdown_right">
                        <a href="#" className="is-circle is-circle_xs">
                          <i className="material-icons-outlined">more_vert</i>
                        </a>
                        <ul className="pm-dropdown_menu">
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">edit</i>
                              <span>Edit</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="material-icons-outlined">manage_accounts</i>
                              <span>Assign</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="clr-primary-500">
                              <i className="material-icons-outlined">delete</i>
                              <span>Delete</span>
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
          <div className="is-flex is-center is-align-center">
            <p className="fs-md">You have reached the end of data.</p>
          </div>
        </>
      }
    />
  );
};

export default DetailDataPopup;
