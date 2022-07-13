import React from 'react';
import awardImage from '@Assets/images/award.png';

const Award = () => (
  <section className="usafiri-award pt-pb-100">
    <div className="container sm-container">
      <div className="row">
        <div className="grid-md-5 grid-sm-12">
          <div className="section-title is-text-center">
            <h2 className="is-capitalize fw-bold mb-12 pd-25">Awards & Recognition</h2>
          </div>
        </div>
        <div className="grid-md-7 grid-sm-12">
          <div className="awardbox">
            <div className="is-flex is-between is-gap-15 is-align-center">
              <div className="awardbox-content">
                <p className="fs-sm clr-primary-500 is-uppercase fw-bold mb-10">July 2020</p>
                <h3>Tech4Dev Grant</h3>
                <p className="mt-10">
                  Funded by the
                  <a href="#" className="fw-bold">
                    Swiss Agency for Development and Cooperation
                  </a>
                  (SDC) through EPFL’s
                  <a href="#" className="fw-bold">
                    Tech4Dev
                  </a>
                </p>
              </div>
              <figure className="award-figure">
                <img src={awardImage} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Award;
