import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@Assets/images/usafiri-beta-logo.svg';
// import logo from '@Assets/images/logo.svg';
import fbLogo from '@Assets/images/fb-logo.svg';
import linkedinLogo from '@Assets/images/linkedin-logo.svg';
import twitterLogo from '@Assets/images/twitter-logo.svg';
import youtubeLogo from '@Assets/images/youtube-logo.svg';

const facebookLink = 'https://www.facebook.com/profile.php?id=100091181447211';
const twitterLink = 'https://twitter.com/usafiri_app';
const linkedInLink = 'https://www.linkedin.com/company/92537525/';
const youtubeLink = 'https://www.youtube.com/@usafiri-io';

const Footer = () => (
  <footer className="site-footer pt-5 pb-5">
    <div className="container">
      <div className="site-footer_up is-flex  is-align-center is-wrap">
        <a href={() => {}} className="site-footer_logo is-grow is-flex ">
          <img src={logo} alt="logo" />
        </a>
        <ul className="site-footer_nav is-flex is-grow is-align-center is-wrap is-gap-15 fw-bold">
          <Link to="/usecase">
            <li>
              <a href={() => {}}>Use cases</a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a href={() => {}}>About</a>
            </li>
          </Link>
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
                <a href={facebookLink} target="_blank" rel="noreferrer">
                  <img src={fbLogo} alt="facebook" />
                </a>
              </li>
              <li>
                <a href={twitterLink} target="_blank" rel="noreferrer">
                  <img src={twitterLogo} alt="twitter" />
                </a>
              </li>
              <li>
                <a href={linkedInLink} target="_blank" rel="noreferrer">
                  <img src={linkedinLogo} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href={youtubeLink} target="_blank" rel="noreferrer">
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
);

export default Footer;
