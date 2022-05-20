/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { FullScreen } from 'ol/control';
import PropTypes from 'prop-types';

const FullScreenControl = ({ map }) => {
  const handleClick = () => {
    map.getView().animate({
      zoom: map.getView().showFullExtent(),
      duration: 200,
    });
  };
  //   useEffect(() => {
  //     if (!map) return;

  //     const fullScreenControl = new FullScreen({});

  //     map.controls.push(fullScreenControl);

  //     return () => map.controls.remove(fullScreenControl);
  //   }, [map]);

  return (
    <a className="is-settings" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <i className="material-icons">crop_free</i>
    </a>
  );
};

FullScreenControl.propTypes = {
  map: PropTypes.object.isRequired,
};

export default FullScreenControl;
