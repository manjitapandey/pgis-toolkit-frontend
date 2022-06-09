/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';

const ZoomControl = ({ map }) => {
  const handleZoomIn = () => {
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

ZoomControl.defaultProps = {
  map: {},
};

ZoomControl.propTypes = {
  map: PropTypes.any,
};

export default ZoomControl;
