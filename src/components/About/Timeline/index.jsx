import React from 'react';

const Timeline = () => (
  <section className="usafir-story pt-pb-100 is-bg" id="usafir-story">
    <div className="container">
      <div className="section-title mb-40">
        <h2 className="is-capitalize fw-bold mb-15">our story</h2>
        <p className="fs-xlg">
          USAFIRI is built on a partnership between the
          <a href="#" className="fw-bold">
            Ecole Polytechnique Fédérale de Lausanne
          </a>
          (EPFL, Switzerland),
          <a href="#" className="fw-bold">
            World Bicycle Relief
          </a>{' '}
          (WBR),
          <br />
          and{' '}
          <a href="#" className="fw-bold">
            Nepal Flying Labs
          </a>{' '}
          (NFL), funded by the
          <a href="#" className="fw-bold">
            Swiss Agency for Development and Cooperation
          </a>
          (SDC) through EPFL’s
          <a href="#" className="fw-bold">
            Tech4Dev
          </a>{' '}
          project office.
        </p>
      </div>
      <div className="grid grid-cols_4">
        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>July 2020</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">
              <a href="#" className="fw-bold is-uppercase">
                NFL{' '}
              </a>{' '}
              &
              <a href="#" className="fw-bold is-uppercase">
                WBR
              </a>{' '}
              Brainstorm about
              <a href="#" className="fw-bold is-uppercase">
                PGIS
              </a>{' '}
              concept about transport assessment tool
            </p>
          </div>
        </div>
        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>July 2020</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">
              Submitted proposal for
              <a href="#" className="fw-bold is-uppercase">
                Tech4Dev{' '}
              </a>
            </p>
          </div>
        </div>
        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>June 2021</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">
              Received Grant from
              <a href="#" className="fw-bold is-uppercase">
                Tech4Dev
              </a>{' '}
              for the development of the open-source tool and pilot testing it.
            </p>
          </div>
        </div>
        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>May 2022</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">
              Kickoff workshop with members from
              <a href="#" className="fw-bold is-uppercase">
                EPFL{' '}
              </a>
              ,
              <a href="#" className="fw-bold is-uppercase">
                WBR
              </a>
              , and
              <a href="#" className="fw-bold is-uppercase">
                NFL{' '}
              </a>{' '}
              in Lausanne Switzerland
            </p>
          </div>
        </div>
        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>June 2022</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">Field Testing Kenya</p>
          </div>
        </div>

        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>Future</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">Revision of tool based on field testing done in Kenya</p>
          </div>
        </div>
        <div className="storybox">
          <div className="storybox-header mb-20">
            <h3>Future</h3>
          </div>
          <div className="storybox-body">
            <p className="fs-xlg">Field Implementation in Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
