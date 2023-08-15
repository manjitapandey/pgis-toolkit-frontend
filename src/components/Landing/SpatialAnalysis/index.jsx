import React from 'react';
import dataQueryImg from '@Assets/images/spatialAnalysis/data-query.svg';
import bufferAnalysisImg from '@Assets/images/spatialAnalysis/buffer-analysis.svg';
import proximityAnalysisImg from '@Assets/images/spatialAnalysis/proximity-analysis.svg';
import routeAnalysisImg from '@Assets/images/spatialAnalysis/route-analysis.svg';

const data = [
  {
    image: dataQueryImg,
    title: 'Data Query',
    content: 'This tool allows you to query on the layers and create a new layers based on the query result.',
  },
  {
    image: bufferAnalysisImg,
    title: 'Buffer Analysis',
    content: 'Creates a zone around a selected feature, distance or time-based, known as a buffer.',
  },
  {
    image: proximityAnalysisImg,
    title: 'Proximity Analysis',
    content:
      'Creates a zone around a selected feature, distance or time-based, known as a proximity, to find features that are within a certain distance of another feature.',
  },
  {
    image: routeAnalysisImg,
    title: 'Optimal Route Analysis',
    content:
      'This method is used to find the most efficient path between multiple locations based on factors such as distance, time, and road conditions. USAFIRI supports data cleaning phase before performing analysis.',
  },
];

const SpatialAnalysis = () => (
  <section className="usafiri-spatial-analysis pt-pb-100 container" id="usafir-spatial-analysis">
    <div className="line" />
    <div className="main-container">
      <div className="title-container">
        <h2 className="title">USAFIRI supports the following Spatial Analysis</h2>
      </div>
      <div className="content-container">
        {data.map((dataItem, i) => (
          <div className={`ind-item ${(i + 1) % 2 === 0 ? 'change-direction' : ''}`}>
            <img src={dataItem.image} alt="" className="item-image" />
            <div className="item-container">
              <h4 className="item-title">{dataItem.title}</h4>
              <p className="item-content">{dataItem.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpatialAnalysis;
