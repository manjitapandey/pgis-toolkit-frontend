/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import PropTypes from 'prop-types';
import NorthArrow from '@src/assets/images/north-arrow-2.svg';

const DownloadControl = ({ map }) => {
  const [download, setDownload] = useState(false);

  const exportMap = () => {
    map.once('rendercomplete', () => {
      const mapCanvas = document.createElement('canvas');
      const size = map.getSize();
      mapCanvas.width = size[0];
      mapCanvas.height = size[1];
      let transformedHeight;
      let transformedWidth;
      let loopCount = 0;
      const mapContext = mapCanvas.getContext('2d');
      const olCanvasEl = document.querySelectorAll('.ol-layer canvas');

      const prepareMap = async () => {
        const img = new Image();
        img.onload = () => {
          mapContext.drawImage(img, transformedWidth - 50, 20, 25, (25 * img.height) / img.width);

          if (navigator.msSaveBlob) {
            // link download attribuute does not work on MS browsers
            navigator.msSaveBlob(mapCanvas.msToBlob(), 'map.png');
            setDownload(false);
          } else {
            const link = document.getElementById('image-download');
            link.href = mapCanvas.toDataURL();
            link.click();

            setDownload(false);
          }
        };

        img.src = NorthArrow;
      };

      Array.prototype.forEach.call(olCanvasEl, (canvas) => {
        loopCount += 1;
        if (canvas.width > 0) {
          const { opacity } = canvas.parentNode.style;
          mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
          const { transform } = canvas.style;
          // Get the transform parameters from the style's transform matrix
          const matrix = transform
            .match(/^matrix\(([^(]*)\)$/)[1]
            .split(',')
            .map(Number);
          // Apply the transform to the export map context
          CanvasRenderingContext2D.prototype.setTransform.apply(mapContext, matrix);

          transformedHeight = canvas.height;
          transformedWidth = canvas.width;
          mapContext.drawImage(canvas, 0, 0);
        }
        if (loopCount === olCanvasEl.length) {
          prepareMap();
        }
      });
    });
    map.renderSync();
  };

  const handleDownload = () => {
    setDownload(true);
  };

  useEffect(() => {
    if (map && download) {
      exportMap();
    }
  }, [map, download]);

  return (
    <>
      <a className="" onClick={handleDownload} title="Export Map" style={{ cursor: 'pointer' }}>
        <i className="material-icons">download</i>
        <a id="image-download" download="map.png" style={{ display: 'none' }} />
      </a>
    </>
  );
};
DownloadControl.defaultProps = {
  map: {},
};
DownloadControl.propTypes = {
  map: PropTypes.any,
};

export default DownloadControl;
