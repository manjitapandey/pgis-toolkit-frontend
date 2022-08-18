import React from 'react';

const MultistepLabel = () => (
  <ul className="multistep is-flex is-between is-align-center is-wrap">
    <li className=" is-complete is-flex is-center is-align-center is-column flex-1">
      <span className=" multistep-number is-flex is-center is-align-center is-column material-icons">check</span>
      <div className="multistep-lebel mt-10">Basic Info</div>
    </li>
    <li className="is-flex is-center is-align-center is-column is-active flex-1">
      <span className="multistep-number is-flex is-center is-align-center is-column ">2</span>
      <div className="multistep-lebel mt-10">Location</div>
    </li>
    {/* <li className="is-flex is-center is-align-center is-column flex-1">
      <span className=" multistep-number is-flex is-center is-align-center is-column ">3</span>
      <div className="multistep-lebel mt-10">Document</div>
    </li>
    <li className="is-flex is-center is-align-center is-column flex-1">
      <span className="multistep-number is-flex is-center is-align-center is-column ">4</span>
      <div className="multistep-lebel mt-10">Data</div>
    </li>
    <li className="is-flex is-center is-align-center is-column flex-1">
      <span className="multistep-number is-flex is-center is-align-center is-column  ">5</span>
      <div className="multistep-lebel mt-10">Map</div>
</li> */}
  </ul>
);

export default MultistepLabel;
