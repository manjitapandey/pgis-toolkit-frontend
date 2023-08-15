import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '@Assets/images/logo.png';
import ProfileImage from '@Assets/images/admin/profile.jpg';
import { Creators } from '@Actions/login';

const { logoutRequest } = Creators;

const Header = () => {
  const { pathname } = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  return (
    <header className="dbd-header pd-10 pl-30 pr-30">
      <div className="container-fluid">
        <div className="is-flex is-between is-align-center is-wrap is-gap-15">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <nav className="nav is-grow">
            <ul className="is-center is-flex is-align-center is-gap-30 is-grow">
              <li className={pathname === '/organizations' ? 'is-active' : ''}>
                <Link to="/organizations">Organization</Link>
              </li>
              <li className={pathname === '/users' ? 'is-active' : ''}>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <div className="is-flex is-end is-align-center">
            <div className="pm-dropdown is-option pm-dropdown_right is-before mr-10 pm-dropdown_notice">
              <a href="#" className="is-circle is-circle_xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <g id="notification-icon" transform="translate(-664 -1905)">
                    <path
                      d="M-.945.945a1.358,1.358,0,0,0,.988.43A1.321,1.321,0,0,0,1.01.967,1.321,1.321,0,0,0,1.418,0H2.793a2.643,2.643,0,0,1-.816,1.934A2.643,2.643,0,0,1,.043,2.75a2.643,2.643,0,0,1-1.934-.816A2.643,2.643,0,0,1-2.707,0h1.375A1.286,1.286,0,0,0-.945.945Zm9.969-5.8a1.886,1.886,0,0,1,.516,2.191A1.913,1.913,0,0,1,7.605-1.375H-7.52A1.913,1.913,0,0,1-9.453-2.664a1.886,1.886,0,0,1,.516-2.191A6.547,6.547,0,0,0-7.348-7.2a11.847,11.847,0,0,0,.516-4.061,6.244,6.244,0,0,1,1.783-4.426,6.6,6.6,0,0,1,4.4-2.105v-.773a.669.669,0,0,1,.193-.494.669.669,0,0,1,.494-.193.669.669,0,0,1,.494.193.669.669,0,0,1,.193.494v.773a6.6,6.6,0,0,1,4.4,2.105,6.244,6.244,0,0,1,1.783,4.426A11.847,11.847,0,0,0,7.434-7.2,6.547,6.547,0,0,0,9.023-4.855ZM7.605-2.75a.638.638,0,0,0,.645-.408.571.571,0,0,0-.172-.709A8,8,0,0,1,6.166-6.682a12.97,12.97,0,0,1-.623-4.576,4.925,4.925,0,0,0-1.611-3.717A5.453,5.453,0,0,0,.043-16.5a5.453,5.453,0,0,0-3.889,1.525,4.925,4.925,0,0,0-1.611,3.717A12.97,12.97,0,0,1-6.08-6.682,8,8,0,0,1-7.992-3.867a.571.571,0,0,0-.172.709.638.638,0,0,0,.645.408Z"
                      transform="translate(679 1928)"
                      fill=""
                    />
                  </g>
                </svg>
              </a>
              <ul className="pm-dropdown_menu">
                <li className="list-header is-flex is-between is-align-center">
                  <h5>notifications</h5>
                </li>
                <li>
                  <div className="list-content">
                    <p>Review requested for submission of form</p>
                    <time>2 days</time>
                  </div>
                </li>
                <li className="list-footer is-flex is-between is-align-center">
                  <a className="circle-icon" role="button">
                    <i className="material-icons">volume_up</i>
                  </a>
                  <a className="common-button is-clear is-icon" role="button" tabIndex="-1" href="#/notifications">
                    <span>view all</span>
                    <i className="material-icons">arrow_forward</i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                showDropdown
                  ? 'pm-dropdown pm-dropdown_right is-option is-before pm-dropdown_show'
                  : 'pm-dropdown pm-dropdown_right is-option is-before'
              }
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <a href="#" className="is-profile">
                <figure className="is-circle is-circle_xs is-circle_img">
                  <img src={ProfileImage} alt="" />
                </figure>
              </a>
              <ul className="pm-dropdown_menu" style={{ cursor: 'pointer' }}>
                <li>
                  <a>Edit Profile</a>
                </li>
                <li>
                  <a onClick={() => dispatch(logoutRequest())}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
