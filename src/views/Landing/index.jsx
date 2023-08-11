/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import RequestForDemo from '@Components/Landing/RequestForDemo/index';
import Banner from '@Components/Landing/Banner/index';
import About from '@Components/Landing/About/index';
import WorkingUsafiri from '@Components/Landing/WokingUsafiri/index';
import Features from '@Components/Landing/Features/index';
import UseCase from '@Components/Landing/UseCase/index';
import Partners from '@Components/Landing/Partners/index';
import FAQs from '@Components/Landing/FAQs/index';
import BannerHeader from '@Components/common/BannerHeader/index';
import Footer from '@Components/common/Footer/index';
import SpatialAnalysis from '@Components/Landing/SpatialAnalysis/index';
import GetInTouch from '@Components/Landing/GetInTouch/index';

const settings = { slidesToShow: 1, infinite: true, arrows: true, className: 'modal-slick' };

const Landing = () => {
  const [showUpBtn, setShowUpBtn] = useState(false);

  const showUpBtnStatus = () => {
    if (window.scrollY >= 500) {
      setShowUpBtn(true);
    } else {
      setShowUpBtn(false);
    }
  };

  window.addEventListener('scroll', showUpBtnStatus);

  return (
    <div className="landing-main-container">
      <BannerHeader />
      {/* MAIN BODY STARTS HERE */}
      <main className="">
        <Banner />
        <About />
        <WorkingUsafiri />
        <Features />
        <SpatialAnalysis />
        <UseCase />
        <Partners />
        <div className="border">
          <div className="container">
            <div className="is-border" />
          </div>
        </div>
        <FAQs />
        <GetInTouch />
        {/* <RequestForDemo /> */}
        {showUpBtn && (
          <div className="landing-up-btn">
            <a
              className=""
              onClick={() => {
                document.querySelector('#landing-header').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <i className="material-icons">north</i>
            </a>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
