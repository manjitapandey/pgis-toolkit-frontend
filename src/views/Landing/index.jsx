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

const settings = { slidesToShow: 1, infinite: true, arrows: true, className: 'modal-slick' };

const Landing = () => (
  <>
    <BannerHeader />
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

    <Footer />
  </>
);

export default Landing;
