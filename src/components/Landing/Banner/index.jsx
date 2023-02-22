import React from 'react';
// import homeBanner from '@Assets/images/home-banner.jpg';
import homeBanner from '@Assets/images/homeBanner3.jpg';

const Banner = () => (
  <section className="home-banner ">
    <div className="container-fluid">
      <div
        className="home-banner_wrap is-flex is-center is-align-center"
        style={{ paddingTop: '103.188px', minHeight: '585px' }}
      >
        <div className="container">
          <div className="row is-center" style={{ marginTop: '3rem' }}>
            <div className="grid-lg-6 grid-sm-12 is-column is-flex is-center is-align-center">
              <div className="home-banner_content is-text-center pd-15 mb-30">
                <div className="">
                  <h1 className="mb-30">A Participatory Mapping Toolkit to aid Evidence-based decision-making</h1>
                  <h4>Piloting the tool for Transport Mobility Assessment in low-income countries.</h4>
                </div>
                <div className="mt-30 pt-15 is-flex is-center">
                  <a className="is-btn is-btn_primary scroll-down" href="#usafiri-request">
                    <span>Request for demo</span>
                  </a>
                </div>
              </div>
//               <a href={() => {}} className="is-circle is-circle_sm is-circle_hover scroll-down mt-30">
//                 <i className="material-icons-outlined">expand_more</i>
//               </a>
            </div>
            <div className="grid-lg-6 grid-sm-12">
              <figure className="home-banner_figure" style={{ minHeight: '568px' }}>
                <img src={homeBanner} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
