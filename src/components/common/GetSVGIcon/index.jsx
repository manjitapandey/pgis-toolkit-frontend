import React from 'react';
import PropTypes from 'prop-types';
import { ReactSvgInjector, Mutate } from 'react-svg-injector';

const GetSVGIcon = ({ src, fillColor }) => {
  console.log(src, fillColor, 'color');
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
