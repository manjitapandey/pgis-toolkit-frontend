import React from 'react';
import image from '@Assets/images/case-1.jpg';

const Cases = () => (
  <section className="usafiri-cases pt-pb-100  ">
    <div className="container">
      <div className="cases-tab">
        <ul className="is-flex is-center is-align-center is-gap-10 is-wrap is-grey-tab">
          <li className="is-active">
            <a href={() => {}} className="is-flex is-column is-center is-align-center">
              <div className="tab-icon">
                <i className="material-icons-outlined">layers</i>
              </div>
              <p>Transport Assessment</p>
            </a>
          </li>
          <li>
            <a href="#" className="is-flex is-column is-center is-align-center">
              <div className="tab-icon">
                <i className="material-icons-outlined">health_and_safety</i>
              </div>
              <p>Planning Health Facilities</p>
            </a>
          </li>
          <li>
            <a href="#" className="is-flex is-column is-center is-align-center">
              <div className="tab-icon">
                <i className="material-icons-outlined">warning_amber</i>
              </div>
              <p>Participator Risk Mapping</p>
            </a>
          </li>
        </ul>
        <div className="mt-25">
          <div className="row is-stretch">
            <div className="grid-xl-3 grid-md-6 grid-sm-12 mb-40">
              <div className="casebox-item ">
                <figure className="casebox-item_image">
                  <img src={image} alt="" />
                </figure>
                <div className="casebox-item_header mt-15">
                  <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                  <h4 className="mb-12 mt-05">Report Mapping Kakamega, Kenya for Transportation Needs Assessment</h4>
                  <date className="fs-md">Aug 2020 - Jan 2022</date>
                </div>
                <div className="casebox-item_body mt-15">
                  <p>
                    The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove the
                    technical feature de…
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-xl-3 grid-md-6 grid-sm-12 mb-40">
              <div className="casebox-item ">
                <figure className="casebox-item_image">
                  <img src={image} alt="" />
                </figure>
                <div className="casebox-item_header mt-15">
                  <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                  <h4 className="mb-12 mt-05">Report Mapping Kakamega, Kenya for Transportation Needs Assessment</h4>
                  <date className="fs-md">Aug 2020 - Jan 2022</date>
                </div>
                <div className="casebox-item_body mt-15">
                  <p>
                    The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove the
                    technical feature de…
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-xl-3 grid-md-6 grid-sm-12 mb-40">
              <div className="casebox-item ">
                <figure className="casebox-item_image">
                  <img src={image} alt="" />
                </figure>
                <div className="casebox-item_header mt-15">
                  <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                  <h4 className="mb-12 mt-05">Report Mapping Kakamega, Kenya for Transportation Needs Assessment</h4>
                  <date className="fs-md">Aug 2020 - Jan 2022</date>
                </div>
                <div className="casebox-item_body mt-15">
                  <p>
                    The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove the
                    technical feature de…
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-xl-3 grid-md-6 grid-sm-12 mb-40">
              <div className="casebox-item ">
                <figure className="casebox-item_image">
                  <img src={image} alt="" />
                </figure>
                <div className="casebox-item_header mt-15">
                  <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                  <h4 className="mb-12 mt-05">Report Mapping Kakamega, Kenya for Transportation Needs Assessment</h4>
                  <date className="fs-md">Aug 2020 - Jan 2022</date>
                </div>
                <div className="casebox-item_body mt-15">
                  <p>
                    The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove the
                    technical feature de…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cases;
