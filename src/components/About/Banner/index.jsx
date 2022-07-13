import React from 'react';
import bannerImage from '@Assets/images/home-banner.jpg';

const Banner = () => (
  <section className="home-banner home-banner_case">
    <div className="container-fluid">
      <div
        className="home-banner_wrap is-flex is-center is-align-center"
        style={{ paddingTop: '103.188px', minHeight: '585px;' }}
      >
        <div className="container">
          <div className="row is-center is-align-center">
            <div className="grid-lg-6 grid-sm-12 is-column is-flex is-center is-align-center">
              <div className="home-banner_content is-text-center pd-15 mb-30">
                <div className="">
                  <h1 className="mb-30">About USAFIRI</h1>
                  <h4>
                    Tackling a significant barrier (tech-literacy) to the implementation of participatory geographic
                    information systems.
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid-lg-6 grid-sm-12">
              <figure className="home-banner_figure">
                <img src={bannerImage} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
