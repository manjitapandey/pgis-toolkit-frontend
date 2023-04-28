import React from 'react';
import image from '@Assets/images/home-banner.jpg';

const Banner = () => (
  <section className="home-banner home-banner_case">
    <div className="container-fluid">
      <div className="home-banner_wrap" style={{ paddingTop: '103.188px', minHeight: '585px;' }}>
        <div className="container">
          <div className="row is-center is-align-center">
            <div className="grid-lg-6 grid-sm-12 is-column is-flex is-center is-align-center">
              <div className="home-banner_content pd-15">
                <h1 className="mb-30">Use Cases</h1>
                <h4>
                  A GIS-based toolkit to assess, in a participatory way, the unmet transportation needs and mobility
                  barriers of rural communities.
                </h4>
              </div>
            </div>
            <div className="grid-lg-6 grid-sm-12">
              <figure className="home-banner_figure">
                <img src={image} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
