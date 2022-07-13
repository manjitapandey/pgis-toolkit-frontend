import React from 'react';
import PropTypes from 'prop-types';
import CaseboxWrapper from '../CaseboxWrapper/index';

const CaseTab = ({ selected, tabOptions, caseboxDetail, setSelected }) => (
  <div className="cases-tab">
    <ul className="is-flex is-center is-align-center is-gap-10 is-wrap">
      {tabOptions.map(({ name, icon }) => (
        <li className={selected === name ? 'is-active' : ''} style={{ cursor: 'pointer' }}>
          <a
            href={() => {}}
            className="is-flex is-column is-center is-align-center"
            onClick={() => setSelected(`${name}`)}
          >
            <div className="tab-icon">
              <i className="material-icons-outlined">{icon}</i>
            </div>
            <p className="fs-body">{name}</p>
          </a>
        </li>
      ))}
    </ul>
    {selected === 'Transport Assessment' && (
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
    {(selected === 'Planning Health Facilities' || selected === 'Participator Risk Mapping') && (
      <h4 className="mb-12 mt-30" style={{ textAlign: 'center' }}>
        {' '}
        We hope to have a use case for this title soon, so please check back later!
      </h4>
    )}
  </div>
);

CaseTab.propTypes = {
  selected: PropTypes.string,
  tabOptions: PropTypes.array,
  caseboxDetail: PropTypes.array,
  setSelected: PropTypes.func,
};

CaseTab.defaultProps = {
  selected: '',
  tabOptions: [],
  caseboxDetail: [],
  setSelected: () => {},
};

export default CaseTab;
