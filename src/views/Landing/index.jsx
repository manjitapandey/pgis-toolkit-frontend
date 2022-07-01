/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RequestForDemo from '@Components/Landing/RequestForDemo/index';
import Slider from 'react-slick';
import logoWhite from '@Assets/images/logo-white.svg';
import logo from '@Assets/images/logo.svg';
import fbLogo from '@Assets/images/fb-logo.svg';
import linkedinLogo from '@Assets/images/linkedin-logo.svg';
import twitterLogo from '@Assets/images/twitter-logo.svg';
import youtubeLogo from '@Assets/images/youtube-logo.svg';
import Banner from '@Components/Landing/Banner/index';
import About from '@Components/Landing/About/index';
import WorkingUsafiri from '@Components/Landing/WokingUsafiri/index';
import Features from '@Components/Landing/Features/index';
import UseCase from '@Components/Landing/UseCase/index';
import Partners from '@Components/Landing/Partners/index';
import FAQs from '@Components/Landing/FAQs/index';

const settings = { slidesToShow: 1, infinite: true, arrows: true, className: 'modal-slick' };

const Landing = () => {
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
    <>
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
        <div className="container">
          <div className="is-flex is-between is-align-center is-wrap is-gap-15 dbd-header-in">
            <a href={() => {}} className="logo">
              <img src={logoWhite} alt="logo" />
            </a>
            <nav className="nav is-grow">
              <div className="toggle-btn material-icons-outlined" onClick={handleClose}>
                close
              </div>
              <ul className="is-center is-flex is-align-center is-gap-30 is-grow">
                <li className="is-active">
                  <a href={() => {}}>use cases</a>
                </li>
                <li>
                  <a href={() => {}}>about</a>
                </li>
              </ul>
            </nav>
            <div className="is-flex is-end is-align-center is-gap-10">
              <Link to="/organizations" className="is-btn is-btn_secondary">
                <span>Sign in</span>
              </Link>
              <a className="is-btn is-btn_primary scroll-down" href="#usafiri-request">
                <span>Request for demo</span>
              </a>
              <div className="toggle-btn material-icons-outlined" onClick={handleMenu}>
                menu
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY STARTS HERE */}
      <main className="">
        <Banner />
        <About />
        <WorkingUsafiri />
        <Features />
        <UseCase />
        <Partners />
        <div className="border">
          <div className="container">
            <div className="is-border" />
          </div>
        </div>
        <FAQs />
        <RequestForDemo />
      </main>

      {/* FOOTER STARTS HERE */}
      <footer className="site-footer pt-5 pb-5">
        <div className="container">
          <div className="site-footer_up is-flex  is-align-center is-wrap">
            <a href={() => {}} className="site-footer_logo is-grow is-flex ">
              <img src={logo} alt="logo" />
            </a>
            <ul className="site-footer_nav is-flex is-grow is-align-center is-wrap is-gap-15 fw-bold">
              <li>
                <a href={() => {}}>Use cases</a>
              </li>
              <li>
                <a href={() => {}}>About</a>
              </li>
            </ul>
          </div>
          <div className="site-footer_down pt-15 ">
            <div className="row">
              <div className="grid-lg-4 grid-md-6 grid-sm-12">
                <div className="copyright-term is-flex  is-align-center is-wrap is-gap-15 fs-md mb-10">
                  <p>© 2022 USAFIR.</p>
                  <ul className="is-flex is-start is-align-center is-gap-15 fw-bold">
                    <li>
                      <a href={() => {}}>Terms of Service</a>
                    </li>
                    <li>
                      <a href={() => {}}>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-lg-4 grid-md-6 grid-sm-12">
                <ul className="is-flex  is-align-center is-gap-20 social-icons mb-10">
                  <li>
                    <a href={() => {}}>
                      <img src={fbLogo} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={() => {}}>
                      <img src={twitterLogo} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={() => {}}>
                      <img src={linkedinLogo} alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href={() => {}}>
                      <img src={youtubeLogo} alt="youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid-lg-4  grid-sm-12">
                <div className="designed-by fs-md is-flex  is-align-center is-gap-05">
                  <span>Designed & Developed by</span>
                  <a href={() => {}} className="fw-bold is-uppercase">
                    Naxa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
