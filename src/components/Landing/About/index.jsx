import React from 'react';

const About = () => (
  <section className="about-usafir pt-pb-100">
    <div className="container">
      <div className="section-title is-text-center mb-20">
        <h6 className="is-uppercase clr-primary-500 fw-bold">ABOUT USAFIR</h6>
      </div>
      <div className="about-usafir_content is-text-center">
        <h3 className="fw-bold mb-20">
          Usafiri is an Open-source, participatory mapping toolkit aimed at rural communities.
        </h3>
        <p className="fs-lg">
          It is built on a partnership between the Ecole Polytechnique Fédérale de Lausanne (EPFL, Switzerland), World
          Bicycle Relief (WBR), and Nepal Flying Labs (NFL), funded by the Swiss Agency for Development and Cooperation
          (SDC). Usafiri is an Open-source, participatory mapping toolkit aimed at rural communities. Aims to identify
          transportation needs and barriers in marginalized areas. The datasets prepared through this toolkit will be
          synchronized to OpenStreetMap for wider dissemination. This project tackles a significant barrier
          (tech-literacy) to the implementation of participatory geographic information systems.
        </p>
      </div>
    </div>
  </section>
);

export default About;
