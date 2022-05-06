/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import LayerGroup from 'ol/layer/Group';
import PropTypes from 'prop-types';
import { mapboxMap, mapboxOutdoors, osm, topoMap, monochrome, monochromeMidNight } from './index';

const CustomLayerSwitcher = ({ layerSource, map, options }) => {
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
          {options.map(({ id, name }) => (
            <li
              className={name.toLowerCase() === layerSwitcherName.toLowerCase() ? 'is-active' : ''}
              onClick={() => handleListClick(id, name)}
              key={`${id}${name}`}
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
  options: PropTypes.object,
};
CustomLayerSwitcher.defaultProps = {
  layerSource: [osm(), topoMap(), mapboxMap(), mapboxOutdoors(), monochrome(), monochromeMidNight()],
  options: [
    { id: '1', name: 'Mapbox Outdoors' },
    { id: '2', name: 'OSM' },
    { id: '3', name: 'Topo Map' },
    { id: '4', name: 'Mapbox Light' },
    { id: '5', name: 'Monochrome' },
    { id: '6', name: 'Monochrome Midnight' },
  ],
};

export default CustomLayerSwitcher;
