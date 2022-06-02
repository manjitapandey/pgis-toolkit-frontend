import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '@Assets/images/logo-white.svg';
import homeBanner from '@Assets/images/home-banner.jpg';
import sc1 from '@Assets/images/sc-1.png';
import image9 from '@Assets/images/Image 9.png';
import image12 from '@Assets/images/Image 12.png';
import image11 from '@Assets/images/Image 11.png';
import image6 from '@Assets/images/Image 6.png';
import image5 from '@Assets/images/Image 5.png';
import image7 from '@Assets/images/Image 7.png';
import case1 from '@Assets/images/case-1.jpg';
import partners2 from '@Assets/images/Partners2.jpg';
import partners1 from '@Assets/images/Partners1.jpg';
import partners3 from '@Assets/images/Partners3.jpg';
import partners4 from '@Assets/images/Partners4.jpg';
import ctaImage from '@Assets/images/CTA-img.jpg';
import logo from '@Assets/images/logo.svg';
import fbLogo from '@Assets/images/fb-logo.svg';
import linkedinLogo from '@Assets/images/linkedin-logo.svg';
import twitterLogo from '@Assets/images/twitter-logo.svg';
import youtubeLogo from '@Assets/images/youtube-logo.svg';

const Landing = () => {
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener('scroll', changeHeader);
  return (
    <>
      <header className={!header ? 'dbd-header dbd-header_home' : 'dbd-header dbd-header_home is-fixed'}>
        <div className="container">
          <div className="is-flex is-between is-align-center is-wrap is-gap-15">
            <a href={() => {}} className="logo">
              <img src={logoWhite} alt="logo" />
            </a>
            <nav className="nav is-grow">
              <ul className="is-center is-flex is-align-center is-gap-30 is-grow">
                <li className="is-active">
                  <a href={() => {}}>use cases</a>
                </li>
                <li>
                  <a href={() => {}}>about</a>
                </li>
              </ul>
            </nav>
            <div className="is-flex is-end is-align-center is-gap-10">
              <Link to="/organizations" className="is-btn is-btn_secondary">
                <span>Sign in</span>
              </Link>
              <button className="is-btn is-btn_primary" type="button">
                <span>Request for demo</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY STARTS HERE */}
      <main className="">
        <section className="home-banner ">
          <div className="container-fluid">
            <div
              className="home-banner_wrap is-flex is-center is-align-center"
              style={{ paddingTop: '101.984px', minHeight: '585px' }}
            >
              <div className="container">
                <div className="row is-center">
                  <div className="grid-lg-6 grid-sm-12 is-column is-flex is-center is-align-center">
                    <div className="home-banner_content is-text-center pd-15 mb-30">
                      <div className="">
                        <h1 className="mb-30">Participatory mapping tool for spatial decision support</h1>
                        <h4>Piloting the tool for Transport Mobility Assessment</h4>
                      </div>
                      <div className="mt-30 pt-15 is-flex is-center">
                        <a className="is-btn is-btn_primary scroll-down" href="#usafiri-request">
                          <span>Request for demo</span>
                        </a>
                      </div>
                    </div>
                    <a href={() => {}} className="is-circle is-circle_sm is-circle_hover scroll-down mt-30">
                      <i className="material-icons-outlined">expand_more</i>
                    </a>
                  </div>
                  <div className="grid-lg-6 grid-sm-12">
                    <figure className="home-banner_figure">
                      <img src={homeBanner} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-usafir pt-pb-100">
          <div className="container">
            <div className="section-title is-text-center mb-20">
              <h6 className="is-uppercase clr-primary-500 fw-bold">ABOUT USAFIR</h6>
            </div>
            <div className="about-usafir_content is-text-center">
              <h3 className="fw-bold mb-20">
                Usafiri is an Open-source, participatory mapping toolkit aimed at rural communities.
              </h3>
              <p>
                Aims to identify transportation needs and barriers in marginalized areas. The datasets prepared through
                this toolkit will be synchronized to OpenStreetMap for wider dissemination. This project tackles a
                significant barrier (tech-literacy) to the implementation of participatory geographic information
                systems.
              </p>
            </div>
          </div>
        </section>
        <section className="usafir-works pt-pb-100 is-bg" id="usafir-works">
          <div className="container">
            <div className="section-title mb-40">
              <h2 className="is-capitalize fw-bold">How USAFIRI Works?</h2>
            </div>
            <div className="row is-center">
              <div className="grid-lg-5 grid-sm-12">
                <ul className="tab-list">
                  <li className="is-border pd-15 is-active">
                    <div className="tab-header">
                      <h4>1. Multi-source data import</h4>
                    </div>
                    <div className="tab-body mt-05 fs-lg">
                      <p>
                        We offer a range of participatory mapping services to voluntary and community groups, business
                        organisations and government bodies.
                      </p>
                    </div>
                  </li>
                  <li className="is-border pd-15">
                    <div className="tab-header">
                      <p>2. Conduct data gap analysis</p>
                    </div>
                    <div className="tab-body mt-05 fs-lg">
                      <p>
                        We offer a range of participatory mapping services to voluntary and community groups, business
                        organisations and government bodies.
                      </p>
                    </div>
                  </li>

                  <li className="is-border pd-15">
                    <div className="tab-header">
                      <p>3. Do data collection planning</p>
                    </div>
                    <div className="tab-body mt-05 fs-lg">
                      <p>
                        We offer a range of participatory mapping services to voluntary and community groups, business
                        organisations and government bodies.
                      </p>
                    </div>
                  </li>
                  <li className="is-border pd-15">
                    <div className="tab-header">
                      <p>4. Upload collected data into USAFIRI</p>
                    </div>
                    <div className="tab-body mt-05 fs-lg">
                      <p>
                        We offer a range of participatory mapping services to voluntary and community groups, business
                        organisations and government bodies.
                      </p>
                    </div>
                  </li>
                  <li className="is-border pd-15">
                    <div className="tab-header">
                      <p>5. Run participatory data planning</p>
                    </div>
                    <div className="tab-body mt-05 fs-lg">
                      <p>
                        We offer a range of participatory mapping services to voluntary and community groups, business
                        organisations and government bodies.
                      </p>
                    </div>
                  </li>
                  <li className="is-border pd-15">
                    <div className="tab-header">
                      <p>6. Conduct spatial analysis & map designs</p>
                    </div>
                    <div className="tab-body mt-05 fs-lg">
                      <p>
                        We offer a range of participatory mapping services to voluntary and community groups, business
                        organisations and government bodies.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid-lg-7 grid-sm-12">
                <div className="pl-30">
                  <figure className="usafir-works_figure">
                    <img src={sc1} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="usafir-features pt-pb-100" id="usafir-features">
          <div className="container">
            <div className="section-title mb-40">
              <h2 className="is-capitalize fw-bold">Major Features</h2>
            </div>
            <div className="row is-stretch">
              <div className="grid-lg-4 grid-md-6 grid-sm-12 mb-5">
                <div className="featuresBox">
                  <figure className="featuresBox-icon">
                    <img src={image9} alt="" />
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
                    <img src={image12} alt="" />
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
                    <img src={image11} alt="" />
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
                    <img src={image6} alt="" />
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
                    <img src={image7} alt="" />
                  </figure>
                  <div className="featuresBox-content mt-20">
                    <h4 className="mb-12">Spatial Analysis for Transport Need Assessment</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <li className="is-active">
                  <a href={() => {}} className="is-flex is-column is-center is-align-center">
                    <div className="tab-icon">
                      <i className="material-icons-outlined">layers</i>
                    </div>
                    <p>Transport Assessment</p>
                  </a>
                </li>
                <li>
                  <a href={() => {}} className="is-flex is-column is-center is-align-center">
                    <div className="tab-icon">
                      <i className="material-icons-outlined">health_and_safety</i>
                    </div>
                    <p>Planning Health Facilities</p>
                  </a>
                </li>
                <li>
                  <a href={() => {}} className="is-flex is-column is-center is-align-center">
                    <div className="tab-icon">
                      <i className="material-icons-outlined">warning_amber</i>
                    </div>
                    <p>Participator Risk Mapping</p>
                  </a>
                </li>
              </ul>
              <div className="case-slider">
                <div className="casebox-wrapper">
                  <div className="casebox-item mt-15">
                    <figure className="casebox-item_image">
                      <img src={case1} alt="" />
                    </figure>
                    <div className="casebox-item_header mt-15">
                      <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                      <h4 className="mb-12 mt-05">
                        Report Mapping Kakamega, Kenya for Transportation Needs Assessment
                      </h4>
                      <date className="fs-md">Aug 2020 - Jan 2022</date>
                    </div>
                    <div className="casebox-item_body mt-15">
                      <p>
                        The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove
                        the technical feature de…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casebox-wrapper">
                  <div className="casebox-item mt-15">
                    <figure className="casebox-item_image">
                      <img src={case1} alt="" />
                    </figure>
                    <div className="casebox-item_header mt-15">
                      <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                      <h4 className="mb-12 mt-05">
                        Report Mapping Kakamega, Kenya for Transportation Needs Assessment
                      </h4>
                      <date className="fs-md">Aug 2020 - Jan 2022</date>
                    </div>
                    <div className="casebox-item_body mt-15">
                      <p>
                        The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove
                        the technical feature de…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casebox-wrapper">
                  <div className="casebox-item mt-15">
                    <figure className="casebox-item_image">
                      <img src={case1} alt="" />
                    </figure>
                    <div className="casebox-item_header mt-15">
                      <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                      <h4 className="mb-12 mt-05">
                        Report Mapping Kakamega, Kenya for Transportation Needs Assessment
                      </h4>
                      <date className="fs-md">Aug 2020 - Jan 2022</date>
                    </div>
                    <div className="casebox-item_body mt-15">
                      <p>
                        The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove
                        the technical feature de…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casebox-wrapper">
                  <div className="casebox-item mt-15">
                    <figure className="casebox-item_image">
                      <img src={case1} alt="" />
                    </figure>
                    <div className="casebox-item_header mt-15">
                      <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                      <h4 className="mb-12 mt-05">
                        Report Mapping Kakamega, Kenya for Transportation Needs Assessment
                      </h4>
                      <date className="fs-md">Aug 2020 - Jan 2022</date>
                    </div>
                    <div className="casebox-item_body mt-15">
                      <p>
                        The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove
                        the technical feature de…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="casebox-wrapper">
                  <div className="casebox-item mt-15">
                    <figure className="casebox-item_image">
                      <img src={case1} alt="" />
                    </figure>
                    <div className="casebox-item_header mt-15">
                      <p className="fw-bold is-uppercase fs-md">TRANSPORT ASSESSMENT</p>
                      <h4 className="mb-12 mt-05">
                        Report Mapping Kakamega, Kenya for Transportation Needs Assessment
                      </h4>
                      <date className="fs-md">Aug 2020 - Jan 2022</date>
                    </div>
                    <div className="casebox-item_body mt-15">
                      <p>
                        The first pilot of the Usafiri tool was conducted here. The learnings from this assessment drove
                        the technical feature de…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <div className="border">
          <div className="container">
            <div className="is-border" />
          </div>
        </div>
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
                  <div className="acc-list acc-list_active">
                    <div className="acc-list_header">
                      <h4 className="is-grow">How is this different than OpenStreetMaps?</h4>
                    </div>
                    <div className="acc-list_body ">
                      <p>
                        While OpenStreetMaps(OSM) provides solid standardized base attributes, by its design it cannot
                        contain specific attributes. We allow the addition of extra attributes to OSM points, lines, and
                        polygons. It is done by linking OSM attributes with Usafiri and adding the extra attributes in
                        Usafiri.{' '}
                      </p>
                    </div>
                  </div>
                  <div className="acc-list ">
                    <div className="acc-list_header">
                      <h4 className="is-grow">Does Usafiri allow data exports?</h4>
                    </div>
                    <div className="acc-list_body">
                      <p>
                        While OpenStreetMaps(OSM) provides solid standardized base attributes, by its design it cannot
                        contain specific attributes. We allow the addition of extra attributes to OSM points, lines, and
                        polygons. It is done by linking OSM attributes with Usafiri and adding the extra attributes in
                        Usafiri.{' '}
                      </p>
                    </div>
                  </div>
                  <div className="acc-list ">
                    <div className="acc-list_header">
                      <h4 className="is-grow">Does Usafiri share data among organizations?</h4>
                    </div>
                    <div className="acc-list_body">
                      <p>
                        While OpenStreetMaps(OSM) provides solid standardized base attributes, by its design it cannot
                        contain specific attributes. We allow the addition of extra attributes to OSM points, lines, and
                        polygons. It is done by linking OSM attributes with Usafiri and adding the extra attributes in
                        Usafiri.{' '}
                      </p>
                    </div>
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
                      <img src={ctaImage} alt="cta" />
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

      {/* FOOTER STARTS HERE */}
      <footer className="site-footer pt-5 pb-5">
        <div className="container">
          <div className="site-footer_up is-flex  is-align-center is-wrap">
            <a href={() => {}} className="site-footer_logo is-grow is-flex ">
              <img src={logo} alt="logo" />
            </a>
            <ul className="site-footer_nav is-flex is-grow is-align-center is-wrap is-gap-15 fw-bold">
              <li>
                <a href={() => {}}>Use cases</a>
              </li>
              <li>
                <a href={() => {}}>About</a>
              </li>
            </ul>
          </div>
          <div className="site-footer_down pt-15 ">
            <div className="row">
              <div className="grid-lg-4 grid-md-6 grid-sm-12">
                <div className="copyright-term is-flex  is-align-center is-wrap is-gap-15 fs-md mb-10">
                  <p>© 2022 USAFIR.</p>
                  <ul className="is-flex is-start is-align-center is-gap-15 fw-bold">
                    <li>
                      <a href={() => {}}>Terms of Service</a>
                    </li>
                    <li>
                      <a href={() => {}}>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-lg-4 grid-md-6 grid-sm-12">
                <ul className="is-flex  is-align-center is-gap-20 social-icons mb-10">
                  <li>
                    <a href={() => {}}>
                      <img src={fbLogo} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={() => {}}>
                      <img src={twitterLogo} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={() => {}}>
                      <img src={linkedinLogo} alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href={() => {}}>
                      <img src={youtubeLogo} alt="youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid-lg-4  grid-sm-12">
                <div className="designed-by fs-md is-flex  is-align-center is-gap-05">
                  <span>Designed & Developed by</span>
                  <a href={() => {}} className="fw-bold is-uppercase">
                    Naxa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
