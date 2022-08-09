/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Overlay from 'ol/Overlay';
import { capitalize } from '@Utils/commonUtils';
import Button from '@Components/common/Button';
import './popup.scss';

const MapPopup = ({ map, except, onButtonClick, buttonText }) => {
  const [elemName, setElemName] = useState('');
  const [category, setCategory] = useState('');
  const [propertiesId, setPropertiesId] = useState(null);
  useEffect(() => {
    if (!map) return;

    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');

    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      setPropertiesId(null);
      return false;
    };

    map.on('singleclick', (evt) => {
      const { coordinate } = evt;
      const features = map.getFeaturesAtPixel(evt.pixel);
      if (features.length < 1) {
        overlay.setPosition(undefined);
        closer.blur();
        content.innerHTML = '';
        return;
      }
      const properties = features[0].getProperties();
      const { layer_id, Name, Category } = properties;
      setElemName(Name);
      setCategory(Category);
      setPropertiesId(layer_id);
      if (layer_id === except) {
        overlay.setPosition(undefined);
        closer.blur();
        return;
      }
      content.innerHTML = `        
            <table class="table font-size-md">
              <thead></thead>
              <thead></thead>
              <tbody>
              ${Object.keys(properties).reduce(
                (str, key) =>
                  `${str}
                <tr>
                  <td>${capitalize(key)}</td>
                  <td class="fw-600">${properties[key]}</td>
                </tr>`,
                '',
              )}
              </tbody>
            </table>
      `;

      overlay.setPosition(coordinate);
      map.addOverlay(overlay);
    });
  }, [map, except]);

  return (
    <div className="leaflet-popup-content-wrapper" id="popup">
      <div className="leaflet-popup-content" style={{ width: '301px' }}>
        <div className="map-popup-wrapper">
          {' '}
          <div className="map-popup-header is-flex is-between mb-10 is-gap-15">
            {(elemName || category) && (
              <div className="is-flex is-start is-align-start is-gap-15">
                {/* <figure className="is-circle is-circle_img is-circle_sm is-circle_bg" /> */}
                <div className="flex-content is-grow">
                  <h5 className="primary-300 is-capitalize">{elemName}</h5>
                  <p>{category}</p>
                </div>
                {/* <i className="material-icons">edit</i> */}
              </div>
            )}
            <a href={() => {}} id="popup-closer" className="ol-popup-closer" />
          </div>
          <div className="naxa-table is-overflow" id="popup-content" />
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
            }}
          >
            <Button label={buttonText} onClick={() => onButtonClick(propertiesId)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
