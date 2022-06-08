import React from 'react';
import PropTypes from 'prop-types';

const GetSVGIcon = ({ src, fillColor }) => {
  return (
    <ReactSvgInjector src={src} className="App-logo">
      <Mutate selector="g" fill={fillColor} />
    </ReactSvgInjector>
  );
};

GetSVGIcon.propTypes = {
  src: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
};

export default GetSVGIcon;
