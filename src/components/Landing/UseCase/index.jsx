import React, { useState } from 'react';
import CaseboxWrapper from '@Components/common/CaseboxWrapper/index';
import { caseboxDetail } from '@src/constants/landing';

const UseCase = () => {
  const [tab, setTab] = useState('Transport Assessment');
  return (
    <section className="usafiri-cases pt-pb-100 is-bg ">
      <div className="container">
        <div className="section-title is-text-center mb-40">
          <h2 className="is-capitalize fw-bold mb-12">Use Cases</h2>
          <p>
            A GIS-based toolkit to assess, in a participatory way, the unmet transportation
            <br /> needs and mobility barriers of rural communities.
          </p>
        </div>
        <div className="cases-tab">
          <ul className="is-flex is-center is-align-center is-gap-10 is-wrap">
            <li className={tab === 'Transport Assessment' ? 'is-active' : ''} style={{ cursor: 'pointer' }}>
              <a
                href={() => {}}
                className="is-flex is-column is-center is-align-center"
                onClick={() => setTab('Transport Assessment')}
              >
                <div className="tab-icon">
                  <i className="material-icons-outlined">layers</i>
                </div>
                <p>Transport Assessment</p>
              </a>
            </li>
            <li className={tab === 'Planning Health Facilities' ? 'is-active' : ''} style={{ cursor: 'pointer' }}>
              <a
                href={() => {}}
                className="is-flex is-column is-center is-align-center"
                onClick={() => setTab('Planning Health Facilities')}
              >
                <div className="tab-icon">
                  <i className="material-icons-outlined">health_and_safety</i>
                </div>
                <p>Planning Health Facilities</p>
              </a>
            </li>
            <li className={tab === 'Participator Risk Mapping' ? 'is-active' : ''} style={{ cursor: 'pointer' }}>
              <a
                href={() => {}}
                className="is-flex is-column is-center is-align-center"
                onClick={() => setTab('Participator Risk Mapping')}
              >
                <div className="tab-icon">
                  <i className="material-icons-outlined">warning_amber</i>
                </div>
                <p>Participator Risk Mapping</p>
              </a>
            </li>
          </ul>
          {tab === 'Transport Assessment' && (
            <div className="case-slider slick-initialized slick-slider">
              <div className="row">
                {caseboxDetail.map(({ heading, image, title, description, date }) => (
                  <CaseboxWrapper heading={heading} image={image} title={title} description={description} date={date} />
                ))}
              </div>

              {/* <Slider {...settings}>
                  {caseboxDetail.map(({ heading, image, title, description, date }) => (
                    <CaseboxWrapper
                      heading={heading}
                      image={image}
                      title={title}
                      description={description}
                      date={date}
                    />
                  ))}
                  </Slider> */}
            </div>
          )}
          {(tab === 'Planning Health Facilities' || tab === 'Participator Risk Mapping') && (
            <h4 className="mb-12 mt-30" style={{ textAlign: 'center' }}>
              {' '}
              We hope to have a use case for this title soon, so please check back later!
            </h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
