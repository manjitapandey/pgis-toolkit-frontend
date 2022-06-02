import React, { useEffect, useRef, useState } from 'react';
import SVGInjector from 'svg-injector';

/* eslint-disable react/prop-types */
const SVGImageIcon = (props) => {
  const imageRef = useRef();
  const { id, src, fillColor = undefined } = props;
  const [svgFillColor, setSvgFillColor] = useState(undefined);

  useEffect(() => {
    if (fillColor) setSvgFillColor(fillColor);
  }, [fillColor]);

  const injectColor = () => {
    const injectorOptions = {
      evalScripts: 'once',
      pngFallback: 'assets/png',
      each: (svg) => {
        if (typeof svg !== 'string') {
          /* eslint-disable-next-line no-param-reassign */
          svg.style.height = 20;
          /* eslint-disable-next-line no-param-reassign */
          svg.style.width = 20;
          /* eslint-disable-next-line no-param-reassign */
          svg.style.fill = svgFillColor;

          const paths = svg.getElementsByTagName('path');
          for (let i = 0; i < paths.length; i += 1) {
            /* eslint-disable-next-line no-param-reassign */
            paths[i].style.fill = svgFillColor;
          }
        }
      },
    };
    SVGInjector(document.querySelectorAll(`img.injectable${id}`), injectorOptions);
  };

  return (
    <img
      ref={imageRef}
      key={`${src} ${fillColor}`}
      className={`injectable${id}`}
      src={src}
      onLoad={injectColor()}
      alt=""
    />
  );
};

export default SVGImageIcon;
