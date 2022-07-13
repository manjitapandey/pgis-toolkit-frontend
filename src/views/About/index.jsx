import React from 'react';
import BannerHeader from '@Components/common/BannerHeader/index';
import Footer from '@Components/common/Footer/index';
import Banner from '@Components/About/Banner/index';
import Features from '@Components/Landing/Features/index';
import AboutUsafiri from '@Components/About/AboutUsafiri/index';
import Timeline from '@Components/About/Timeline/index';
import Award from '@Components/About/Award/index';
import RequestForDemo from '@Components/Landing/RequestForDemo/index';

const About = () => (
  <>
    <BannerHeader />
    <main className="">
      <Banner />
      <AboutUsafiri />
      <div className="border">
        <div className="container">
          <div className="is-border" />
        </div>
      </div>
      <Features />
      <Timeline />
      <Award />
      <RequestForDemo />
    </main>
    <Footer />
  </>
);

export default About;
