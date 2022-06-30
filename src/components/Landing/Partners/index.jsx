import React from 'react';
import partners2 from '@Assets/images/Partners2.jpg';
import partners1 from '@Assets/images/Partners1.jpg';
import partners3 from '@Assets/images/Partners3.jpg';
import partners4 from '@Assets/images/Partners4.jpg';

const Partners = () => (
  <section className="usafiri-partners pt-pb-100  ">
    <div className="container">
      <div className="section-title is-text-center mb-40">
        <h2 className="is-capitalize fw-bold mb-12">Partners</h2>
      </div>
      <div className="row">
        <div className="grid-xl-3 grid-6">
          <div className="partnerBox">
            <p className="mb-20">Supported by</p>
            <div className="partnerBox-logos is-flex is-start is-align-center is-gap-15 is-wrap">
              <a href={() => {}}>
                <img src={partners2} alt="tech4dev" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-xl-3 grid-6">
          <div className="partnerBox">
            <p className="mb-20">Implementing partner</p>
            <div className="partnerBox-logos is-flex is-start is-align-center is-gap-15 is-wrap">
              <a href={() => {}}>
                <img src={partners1} alt="world bicycle" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-xl-3 grid-6">
          <div className="partnerBox">
            <p className="mb-20">Research partner</p>
            <div className="partnerBox-logos is-flex is-start is-align-center is-gap-15 is-wrap">
              <a href={() => {}}>
                <img src={partners3} alt="ceat " />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-xl-3 grid-6">
          <div className="partnerBox">
            <p className="mb-20">Technology partners</p>
            <div className="partnerBox-logos is-flex is-start is-align-center is-gap-15 is-wrap ">
              <a href={() => {}}>
                <img src={partners4} alt="naxa " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
