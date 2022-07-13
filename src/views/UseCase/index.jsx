import React from 'react';
import BannerHeader from '@Components/common/BannerHeader/index';
import Banner from '@Components/UseCase/Banner/indes';
import Cases from '@Components/UseCase/Cases/index';
import Footer from '@Components/common/Footer/index';
import RequestForDemo from '@Components/Landing/RequestForDemo/index';

const UseCase = () => (
  <>
    <BannerHeader />
    <main className="">
      <Banner />
      <Cases />
      <RequestForDemo />
    </main>
    <Footer />
  </>
);

export default UseCase;
