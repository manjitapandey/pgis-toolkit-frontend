/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { Zoom } from 'ol/control';
import PropTypes from 'prop-types';

const ZoomControl = ({ map }) => {
  //   useEffect(() => {
  //     if (!map) return;
  //     const zoomControl = new Zoom({});
  //     map.controls.push(zoomControl);
  //     return () => map.controls.remove(zoomControl);
  //   }, [map]);

  const handleZoomIn = () => {
    // map.getView().setZoom(map.getView().getZoom() + 1);
    map.getView().animate({
      zoom: map.getView().getZoom() + 1,
      duration: 200,
    });
  };

  const handleZoomOut = () => {
    map.getView().animate({
      zoom: map.getView().getZoom() - 1,
      duration: 200,
    });
  };

  return (
    <div className="setting-list" title="Tools">
      <a className="" onClick={handleZoomIn} style={{ cursor: 'pointer' }}>
        <i className="material-icons">add</i>
      </a>
      <a className="" onClick={handleZoomOut} style={{ cursor: 'pointer' }}>
        <i className="material-icons">remove</i>
      </a>
    </div>
  );
};

ZoomControl.propTypes = {
  map: PropTypes.object.isRequired,
};

export default ZoomControl;
