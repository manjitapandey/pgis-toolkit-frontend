/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import buffer from '@turf/buffer';
import { get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorSource } from 'ol/source';
import OLVectorLayer from 'ol/layer/Vector';
import { Fill, Stroke, Style } from 'ol/style';
import { defaultStyles, getStyles, hexToRgba } from '@src/components/OpenLayersComponent/helpers/styleUtils';
import { submissionsId } from '@src/constants/siteMap';

const bufferColor = '#ffb100';

const bufferStyle = new Style({
  // fill: new Fill({
  //   color: hexToRgba(bufferColor, 15),
  // }),
  stroke: new Stroke({
    color: bufferColor,
    width: 3,
    lineDash: [7],
  }),
});

let selected = null;
// let hoveredLayer = null;

const SubmissionsLayer = ({
  map,
  geojson,
  style,
  zIndex,
  zoomToLayer,
  visibleOnMap,
  showGPSAccuracy,
  setStyle,
  properties,
}) => {
  const [vectorLayer, setVectorLayer] = useState(null);
  const [bufferLayers, setBufferLayers] = useState([]);

  useEffect(() => {
    return () => map && vectorLayer && map.removeLayer(vectorLayer);
  }, [map, vectorLayer]);

  useEffect(() => {
    if (!map) return;

    const vectorLyr = new OLVectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojson, {
          featureProjection: get('EPSG:3857'),
        }),
      }),
      // declutter: true,
    });

    setVectorLayer(vectorLyr);
  }, [map, geojson]);

  useEffect(() => {
    if (!map || !vectorLayer) return;
    if (visibleOnMap) {
      map.addLayer(vectorLayer);
    } else {
      map.removeLayer(vectorLayer);
    }
  }, [map, vectorLayer, visibleOnMap]);

  // // set properties
  // useEffect(() => {
  //   if (!vectorLayer) return;
  //   vectorLayer.setProperties(properties);
  // }, [vectorLayer, properties]);

  // set layer id to features for identifying popup
  useEffect(() => {
    if (!vectorLayer) return;
    const features = vectorLayer.getSource().getFeatures();
    features.forEach((feat) => {
      feat.setProperties(properties);
    });
  }, [vectorLayer, properties]);

  useEffect(() => {
    if (!vectorLayer || !style.visibleOnMap) return;
    vectorLayer.setStyle(setStyle);
  }, [vectorLayer, setStyle]);

  useEffect(() => {
    if (!vectorLayer) return;
    vectorLayer.setZIndex(zIndex);
  }, [vectorLayer, zIndex]);

  useEffect(() => {
    if (!map || !vectorLayer || !zoomToLayer) return;
    map.getView().fit(vectorLayer.getSource().getExtent(), {
      padding: [50, 50, 50, 50],
      duration: 900,
      constrainResolution: true,
    });
  }, [map, vectorLayer, zoomToLayer]);

  // add buffer layer on hover and click
  useEffect(() => {
    if (!map) return;

    let hoveredLayer = null;

    function onClick(e) {
      const { type } = e;
      if (type === 'click') {
        map.on('pointermove', onClick);
      }
      if (selected !== null) {
        selected = null;
      }
      if (hoveredLayer) {
        map.removeLayer(hoveredLayer);
        hoveredLayer = null;
      }
      map.forEachFeatureAtPixel(e.pixel, (feat) => {
        const featProperties = feat.getProperties();
        const { layerId, id } = featProperties;
        if (selected === id) {
          return;
        }
        bufferLayers.forEach((layer) => {
          const layerSource = layer.getSource();
          const feature = layerSource.getFeatures()[0];
          const propertiesx = feature.getProperties();
          if (propertiesx.id === id) {
            if (hoveredLayer) return;
            hoveredLayer = layer;
            map.addLayer(hoveredLayer);
            selected = id;
            if (type === 'click') {
              map.un('pointermove', onClick);
            }
          }
        });
      });
    }

    if (showGPSAccuracy) {
      // remove hover and click handler when gps accuracy layer is toggled
      map.un('pointermove', onClick);
      map.un('click', onClick);
    } else {
      map.on('pointermove', onClick);
      map.on('click', onClick);
    }

    return () => {
      if (selected !== null) {
        selected = null;
      }
      if (hoveredLayer) {
        map.removeLayer(hoveredLayer);
        hoveredLayer = null;
      }
      map.un('pointermove', onClick);
      map.un('click', onClick);
    };
  }, [map, bufferLayers, showGPSAccuracy]);

  function addBufferLayer(feature, buffers) {
    const format = new GeoJSON();
    const geojsonStr = format.writeFeature(feature, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    const featureGeojson = JSON.parse(geojsonStr);
    const { accuracy, id } = feature.getProperties();
    if (!+accuracy) return;
    const bufferPolygon = buffer(featureGeojson, +accuracy, { units: 'meters' });
    const bufferLayer = new OLVectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(bufferPolygon, {
          featureProjection: get('EPSG:3857'),
        }),
      }),
      style: bufferStyle,
      zIndex: zIndex - 1,
    });
    bufferLayer.getSource().getFeatures()[0].setProperties(id);
    buffers.push(bufferLayer);
  }

  // gps accuracy layer
  useEffect(() => {
    if (!map || !vectorLayer) return;
    const source = vectorLayer.getSource();
    const features = source.getFeatures();
    const buffers = [];
    features.forEach((feature) => {
      addBufferLayer(feature, buffers);
    });
    setBufferLayers(buffers);
  }, [map, vectorLayer]);

  // add buffers to map
  useEffect(() => {
    if (!map) return;
    if (showGPSAccuracy) {
      bufferLayers.forEach((layer) => {
        map.addLayer(layer);
      });
    } else {
      bufferLayers.forEach((layer) => {
        map.removeLayer(layer);
      });
    }
  }, [map, bufferLayers, showGPSAccuracy]);

  return null;
};

SubmissionsLayer.defaultProps = {
  zIndex: 1,
  style: { ...defaultStyles },
  zoomToLayer: false,
};

SubmissionsLayer.propTypes = {
  geojson: PropTypes.object.isRequired,
  style: PropTypes.object,
  zIndex: PropTypes.number,
  zoomToLayer: PropTypes.bool,
};

export default SubmissionsLayer;
