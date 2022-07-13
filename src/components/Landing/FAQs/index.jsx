import React from 'react';
import Accordion from '@Components/common/Accordion/index';
import { accordionDetails } from '@src/constants/landing';

const FAQs = () => (
  <section className="usafiri-faqs pt-pb-100  ">
    <div className="container">
      <div className="row">
        <div className="grid-xxl-3 grid-xl-4 grid-sm-12">
          <div className="section-title  mb-40">
            <h2 className="is-capitalize fw-bold mb-12">FAQs</h2>
          </div>
        </div>
        <div className="grid-xxl-9 grid-xl-8 grid-sm-12">
          <div className="acc acc-after acc-border">
            {accordionDetails.map(({ h4Header, description }, index) => (
              <Accordion h4Header={h4Header} body={<p>{description}</p>} collapsed={index !== 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQs;
