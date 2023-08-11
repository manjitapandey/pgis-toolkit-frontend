/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { useLocation, Link } from 'react-router-dom';
// import logoWhite from '@Assets/images/logo-white.svg';
import logoWhite from '@Assets/images/usafiri-beta-white-logo.svg';
import logoDark from '@Assets/images/usafiri-beta-logo.svg';

const BannerHeader = () => {
  const { pathname } = useLocation();
  const [header, setHeader] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
  };
  const changeHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener('scroll', changeHeader);
  return (
    <header
      // className={
      //   !header
      //     ? 'dbd-header dbd-header_home'
      //     : menu
      //     ? 'dbd-header dbd-header_home is-fixed dbd-header_active'
      //     : 'dbd-header dbd-header_home is-fixed'
      // }
      className={
        menu
          ? 'dbd-header dbd-header_home dbd-header_active'
          : menu && header
          ? 'dbd-header dbd-header_home is-fixed dbd-header_active'
          : header
          ? 'dbd-header dbd-header_home is-fixed'
          : 'dbd-header dbd-header_home'
      }
    >
      <div className="container landing-header">
        <div className="is-flex is-between is-align-center is-wrap is-gap-15 dbd-header-in">
          <Link to="/" className="logo">
            <img src={header ? logoDark : logoWhite} alt="logo" />
          </Link>
          <nav className="nav is-grow">
            <div className="toggle-btn material-icons-outlined" onClick={handleClose}>
              close
            </div>
            <ul className="is-center is-flex is-align-center is-gap-30 is-grow">
              <Link to="/usecase">
                <li className={pathname === '/usecase' ? 'is-active' : ''}>
                  <a href={() => {}}>use cases</a>
                </li>
              </Link>
              <Link to="about">
                <li className={pathname === '/about' ? 'is-active' : ''}>
                  <a href={() => {}}>about</a>
                </li>
              </Link>
            </ul>
          </nav>
          <div className="is-flex is-end is-align-center is-gap-10">
            <a
              type="button"
              className="is-btn is-gap-10"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                document.querySelector('#usafiri-get-in-touch').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <i className="material-icons-outlined" style={{ color: 'white', textDecoration: 'none' }}>
                message
              </i>
              <p className="request-btn fw-700">Request Access</p>
            </a>

            <a href="https://app.usafiri.io/" target="_blank" className="is-btn is-btn_secondary" rel="noreferrer">
              <span>Sign in</span>
            </a>
            {/* <a className="is-btn is-btn_primary scroll-down" href="#usafiri-request">
              <span>Request for demo</span>
            </a> */}
            <div className="toggle-btn material-icons-outlined" onClick={handleMenu}>
              menu
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerHeader;
