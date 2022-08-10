import React from 'react';
import image9 from '@Assets/images/Image 9.png';
import image12 from '@Assets/images/Image 12.png';
import image11 from '@Assets/images/Image 11.png';
import image6 from '@Assets/images/Image 6.png';
import image5 from '@Assets/images/Image 5.png';
import image7 from '@Assets/images/Image 7.png';

const Features = () => (
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
              <p className="fs-xlg">
                Manage your data collection projects effectively, and easily create your own organization and projects
                and start your data collection process.
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
              <p className="fs-xlg">
                We allow importing data from different sources and formats. OpenStreetMaps, Custom Templates, and raw
                .shp files.
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
              <p className="fs-xlg">
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
              <p className="fs-xlg">
                We provide a user-friendly interface for mapping, You can create new geographic data points or modify
                the existing data points.
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
              <p className="fs-xlg">
                The data points in the map can be styled with different colors, strokes, and symbology. The styled map
                can also be exported as a pdf.
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
              <p className="fs-xlg">
                Spatial analysis can help identify areas where new transport infrastructure is most needed. It can also
                help to optimize the use of existing infrastructure, such as land use and traffic flow analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
