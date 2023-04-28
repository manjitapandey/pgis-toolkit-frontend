import React from 'react';

const About = () => (
  <section className="about-usafir pt-pb-100">
    <div className="container">
      <div className="section-title is-text-center mb-20">
        <h6 className="is-uppercase clr-primary-500 fw-bold">ABOUT USAFIRI</h6>
      </div>
      <div className="about-usafir_content is-text-center">
        <h2 className="fw-bold mb-20">
          USAFIRI is a web-based participatory mapping tool developed and coded by a multidisciplinary team consisting
          of academic institutions, technology service providers, and transportation practitioners.
        </h2>
        <p className="fs-xlg">
          The tool is co-designed with practitioners in the field of transportation need assessments, climate technology
          and geospatial applications design and development.The tool addresses the need for combining datasets from
          multiple sources via a web browser and allows basic levels of analysis to aid transport decision making.
          Additionally, because the tool adapts existing mapping tools to make them more user-friendly, this project
          tackles a significant barrier (tech-literacy) to the implementation of participatory geographic information
          systems. As the tool is targeted for data scarce locations, it also has the ability to automatically download
          required datasets using open mapping platforms such as OpenStreetMap and then use those data for a quick
          analysis to understand the transportation scenario in a community.
        </p>
      </div>
    </div>
  </section>
);

export default About;
