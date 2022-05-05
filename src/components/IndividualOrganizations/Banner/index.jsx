import Dropdown from '@Components/common/Dropdown/index';
import React from 'react';
import { Link } from 'react-router-dom';
import { dropdownOptions } from '../../../constants/commonData';

const Banner = () => {
  const handleSelect = () => {};
  return (
    <div className="is-flex is-between is-align-start gap-15 mb-15">
      <div className="is-flex is-start is-align-start is-grow">
        <Link to="/organizations" className="is-back is-circle is-circle_sm mr-15">
          <i className="material-icons">arrow_back</i>
        </Link>
        <div className="is-flex is-start is-align-start is-grow">
          <div className="is-circle is-radius-4 is-circle_img is-circle_md is-circle_bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_2843"
                    data-name="Rectangle 2843"
                    width="36"
                    height="36"
                    transform="translate(23 156)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_46"
                data-name="Mask Group 46"
                transform="translate(-23 -156)"
                clipPath="url(#clip-path)"
              >
                <g id="Group_6729" data-name="Group 6729" transform="translate(26.357 162.714)">
                  <path
                    id="ic_folder_special_48px"
                    d="M30.145,10.905H18.525L15.62,8H6.905A2.914,2.914,0,0,0,4,10.905v17.43A2.914,2.914,0,0,0,6.905,31.24h23.24a2.914,2.914,0,0,0,2.905-2.905V13.81A2.914,2.914,0,0,0,30.145,10.905Zm-3,15.978-4.263-2.5-4.263,2.5,1.133-4.837L15.99,18.792l4.96-.428,1.932-4.554,1.939,4.561,4.96.428L26.02,22.053Z"
                    transform="translate(-4 -8)"
                    fill="#fff"
                  />
                  <path
                    id="ic_folder_special_48px-2"
                    data-name="ic_folder_special_48px"
                    d="M25.871,26.265l-4.263-2.5-4.263,2.5,1.133-4.837-3.762-3.254,4.96-.428,1.932-4.554,1.939,4.561,4.96.428-3.762,3.254Z"
                    transform="translate(-2.725 -7.382)"
                    fill="#05f"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="is-grow ml-15">
            <div className="is-flex is-start is-align-start is-grow mb-05">
              <h3 className="mr-15 is-trim-2">World Bicycle Relief</h3>
              <button className="is-btn is-btn_link is-btn_sm" type="button">
                <i className="fs-md material-icons mr-10">info</i>
                <span>Info</span>
              </button>
            </div>

            <ul className="is-gap-50 is-flex is-wrap is-start">
              <li className="is-flex is-start is-align-center is-gap-10">
                <i className="material-icons clr-primary-500">mail_outline</i>
                <span>worldbicyclereleif@mail.com</span>
              </li>
              <li className="is-flex is-start is-align-center is-gap-10">
                <i className="material-icons clr-primary-500">language</i>
                <span>www.worldbicyclereleif.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Dropdown options={dropdownOptions} onClick={handleSelect} />
    </div>
  );
};

export default Banner;
