/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import LayerGroup from 'ol/layer/Group';
import PropTypes from 'prop-types';
import { mapboxMap, mapboxOutdoors, osm, topoMap, monochrome, monochromeMidNight } from './index';
import { switcherOptions } from '../../../../constants/commonData';

const CustomLayerSwitcher = ({ layerSource, map }) => {
  const [layerSwitcherName, setLayerSwitcherName] = useState('Mapbox Light');
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const toggleLayer = (name) => {
    const layerList = map.getLayers();
    layerList.forEach((element) => {
      if (element instanceof LayerGroup) {
        element?.values_.layers.array_?.forEach((elements) => {
          if (name === elements.values_.title) {
            elements.setProperties({ visible: true });
          } else {
            elements.setProperties({ visible: false });
          }
        });
      }
    });
  };

  const handleListClick = (id, name) => {
    setLayerSwitcherName(name);
    toggleLayer(name);
  };

  useEffect(() => {
    if (!map) return;
    const baseMaps = new LayerGroup({
      title: 'Base maps',
      layers: layerSource,
    });
    map.addLayer(baseMaps);
    return () => {
      map.removeLayer(baseMaps);
    };
  }, [map, layerSource]);

  return (
    <div
      className={toggle ? 'map-layers mt-10 is-active' : 'map-layers mt-10'}
      title="Grid Layers"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <a className="layer-view">
        <i className="material-icons">layers</i>
      </a>
      <div className="map-layers-dropdown">
        <div className="pd-10">
          <p className="font-size-h6 is-uppercase">Base Layers</p>
        </div>
        <ul className="pm-list pm-list_after">
          {switcherOptions.map(({ id, name }) => (
            <li
              className={name.toLowerCase() === layerSwitcherName.toLowerCase() ? 'is-active' : ''}
              onClick={() => handleListClick(id, name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CustomLayerSwitcher.propTypes = {
  layerSource: PropTypes.array,
  map: PropTypes.object.isRequired,
};
CustomLayerSwitcher.defaultProps = {
  layerSource: [osm(), topoMap(), mapboxMap(), mapboxOutdoors(), monochrome(), monochromeMidNight()],
};

export default CustomLayerSwitcher;
