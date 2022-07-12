import React from 'react';
import BannerHeader from '@Components/common/BannerHeader/index';
import Footer from '@Components/common/Footer/index';
import bannerImage from '@Assets/images/home-banner.jpg';
import image1 from '@Assets/images/Image 9.png';
import image2 from '@Assets/images/Image 12.png';
import image3 from '@Assets/images/Image 11.png';
import image4 from '@Assets/images/Image 6.png';
import image5 from '@Assets/images/Image 5.png';
import image6 from '@Assets/images/Image 7.png';
import awardImage from '@Assets/images/award.png';
import CTAimage from '@Assets/images/CTA-img.jpg';

const About = () => (
  <>
    <BannerHeader />
    <main className="">
      <section className="home-banner home-banner_case">
        <div className="container-fluid">
          <div
            className="home-banner_wrap is-flex is-center is-align-center"
            style={{ paddingTop: '103.188px', minHeight: '585px;' }}
          >
            <div className="container">
              <div className="row is-center is-align-center">
                <div className="grid-lg-6 grid-sm-12 is-column is-flex is-center is-align-center">
                  <div className="home-banner_content is-text-center pd-15 mb-30">
                    <div className="">
                      <h1 className="mb-30">About USAFIRI</h1>
                      <h4>
                        Tackling a significant barrier (tech-literacy) to the implementation of participatory geographic
                        information systems.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="grid-lg-6 grid-sm-12">
                  <figure className="home-banner_figure">
                    <img src={bannerImage} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-usafir pt-pb-100">
        <div className="container">
          <div className="about-usafir_content">
            <div className="section-title mb-20">
              <h3 className="is-capitalize fw-bold">Purpose of USAFIRI</h3>
            </div>
            <h4 className="mb-15">
              This project proposes to develop a GIS-based toolkit to assess, in a participatory way, the unmet
              transportation needs and mobility barriers of rural communities.
            </h4>

            <p>
              This project proposes to develop a GIS-based toolkit to assess, in a participatory way, the unmet
              transportation needs and mobility barriers of rural communities.
            </p>
            <p>
              The project is an open-source, participatory mapping toolkit aimed at rural communities, intended to guide
              development planners and policy-makers in identifying transportation needs and barriers in marginalized
              areas.
            </p>
            <p>
              Additionally, because the toolkit adapts existing mapping tools to make them more user-friendly, this
              project tackles a significant barrier (tech-literacy) to the implementation of participatory geographic
              information systems. Ultimately, the toolkit aims to facilitate both collecting and sharing geodata
              required to evaluate the accessibility, utilization, and sustainability of mobility options.
            </p>
          </div>
        </div>
      </section>
      <div className="border">
        <div className="container">
          <div className="is-border" />
        </div>
      </div>

      <section className="usafir-features pt-pb-100" id="usafir-features">
        <div className="container">
          <div className="section-title mb-40">
            <h2 className="is-capitalize fw-bold">Major Features</h2>
          </div>
          <div className="row is-stretch">
            <div className="grid-lg-4 grid-md-6 grid-sm-12 mb-5">
              <div className="featuresBox">
                <figure className="featuresBox-icon">
                  <img src={image1} alt="" />
                </figure>
                <div className="featuresBox-content mt-20">
                  <h4 className="mb-12">Create Organization & Manage Projects</h4>
                  <p>
                    Manage your data collection projects effectively, and easily create your own organization and
                    projects and start your data collection process.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-lg-4 grid-md-6 grid-sm-12 mb-5">
              <div className="featuresBox">
                <figure className="featuresBox-icon">
                  <img src={image2} alt="" />
                </figure>
                <div className="featuresBox-content mt-20">
                  <h4 className="mb-12">Multisource Data Integration</h4>
                  <p>
                    We allow importing data from different sources and formats. OpenStreetMaps, Custom Templates, and
                    raw .shp files.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-lg-4 grid-md-6 grid-sm-12 mb-5">
              <div className="featuresBox">
                <figure className="featuresBox-icon">
                  <img src={image3} alt="" />
                </figure>
                <div className="featuresBox-content mt-20">
                  <h4 className="mb-12">Data Validation through Participatory Mapping</h4>
                  <p>
                    Geo-graphic data and their attributes can be visualized in the map and tabular form and validated.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-lg-4 grid-md-6 grid-sm-12">
              <div className="featuresBox">
                <figure className="featuresBox-icon">
                  <img src={image4} alt="" />
                </figure>
                <div className="featuresBox-content mt-20">
                  <h4 className="mb-12">Simple Interactive Mapping Interface</h4>
                  <p>
                    We provide a user-friendly interface for mapping, You can create new geographic data points or
                    modify the existing data points.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-lg-4 grid-md-6 grid-sm-12">
              <div className="featuresBox">
                <figure className="featuresBox-icon">
                  <img src={image5} alt="" />
                </figure>
                <div className="featuresBox-content mt-20">
                  <h4 className="mb-12">Map Design & Export</h4>
                  <p>
                    The data points in the map can be styled with different colors, strokes, and symbology. The styled
                    map can also be exported as a pdf.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-lg-4 grid-md-6 grid-sm-12">
              <div className="featuresBox">
                <figure className="featuresBox-icon">
                  <img src={image6} alt="" />
                </figure>
                <div className="featuresBox-content mt-20">
                  <h4 className="mb-12">Spatial Analysis for Transport Need Assessment</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usafir-story pt-pb-100 is-bg" id="usafir-story">
        <div className="container">
          <div className="section-title mb-40">
            <h2 className="is-capitalize fw-bold mb-15">our story</h2>
            <p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>Field Testing Kenya</p>
              </div>
            </div>

            <div className="storybox">
              <div className="storybox-header mb-20">
                <h3>Future</h3>
              </div>
              <div className="storybox-body">
                <p>Revision of tool based on field testing done in Kenya</p>
              </div>
            </div>
            <div className="storybox">
              <div className="storybox-header mb-20">
                <h3>Future</h3>
              </div>
              <div className="storybox-body">
                <p>Field Implementation in Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="usafiri-request" id="usafiri-request">
        <div className="container">
          <div className="usafiri-request-wrap">
            <div className="usafiri-request-content">
              <div className="row">
                <div className="grid-lg-7 grid-sm-12">
                  <figure className="request-image">
                    <img src={CTAimage} alt="cta" />
                  </figure>
                </div>
                <div className="grid-lg-5 grid-sm-12">
                  <form className="pd-25">
                    <div className="pm-group">
                      <input type="text" placeholder="Full name" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <input type="email" placeholder="Email" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <input type="number" placeholder="Phone" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <input type="text" placeholder="Organization Name" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <div className="pm-checkbox mb-0">
                        <input type="checkbox" id="signin" />
                        <label htmlFor="signin" className="fs-md">
                          Yes, I would like to receive marketing communications regarding USAFIRI.
                        </label>
                      </div>
                    </div>
                    <button className="is-btn is-btn_primary" type="button">
                      <span>Request for demo</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
