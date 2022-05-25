/* eslint-disable no-console */
import { useEffect, useMemo } from 'react';
// import * as olExtent from 'ol/extent';
import VectorTile from 'ol/layer/VectorTile';
import MVT from 'ol/format/MVT';
import VectorTileSource from 'ol/source/VectorTile';
import { getStyles, defaultStyles } from '../helpers/styleUtils';
// import { isExtentValid } from '../helpers/layerUtils';

const VectorTileLayer = ({
  map,
  url,
  style = { ...defaultStyles },
  zIndex = 1,
  visibleOnMap = true,
  authToken,
  setStyle,
  // properties,
}) => {
  const vectorTileLayer = useMemo(
    () =>
      new VectorTile({
        renderMode: 'hybrid',
        // declutter: true,
      }),
    [],
  );

  vectorTileLayer.setProperties({ name: 'site' });

  // add source to layer
  useEffect(() => {
    if (!map) return;

    const requestHeader = new Headers();
    if (authToken) {
      requestHeader.append('Authorization', `Token ${authToken}`);
    }

    const vectorTileSource = new VectorTileSource({
      format: new MVT(),
      maxZoom: 19,
      url,
      transition: 0,
      tileLoadFunction: (tile, vtUrl) => {
        tile.setLoader((extent, resolution, projection) => {
          fetch(vtUrl, {
            headers: requestHeader,
          }).then((response) => {
            response.arrayBuffer().then((data) => {
              const format = tile.getFormat();
              const features = format.readFeatures(data, {
                extent,
                featureProjection: projection,
              });
              tile.setFeatures(features);
            });
          });
        });
      },
    });
    vectorTileLayer.setSource(vectorTileSource);
  }, [map, url, authToken, vectorTileLayer]);

  // add layer to map
  useEffect(() => {
    if (!map) return;
    if (visibleOnMap) {
      map.addLayer(vectorTileLayer);
    } else {
      map.removeLayer(vectorTileLayer);
    }
  }, [map, visibleOnMap, vectorTileLayer]);

  // // set style
  useEffect(() => {
    if (!map || !visibleOnMap) return;
    vectorTileLayer.setStyle(setStyle);
  }, [map, setStyle, vectorTileLayer, visibleOnMap]);

  // set style
  useEffect(() => {
    if (!map || !visibleOnMap) return;
    vectorTileLayer.setStyle((feature, resolution) => getStyles({ style, feature, resolution }));
  }, [map, style, vectorTileLayer, visibleOnMap]);

  // set z-index
  useEffect(() => {
    if (!map) return;
    vectorTileLayer.setZIndex(zIndex);
  }, [map, zIndex, vectorTileLayer]);

  // // set properties to features for identifying popup
  // useEffect(() => {
  //   if (!vectorTileLayer || !properties) return;
  //   vectorTileLayer.getSource().on('tileloadend', (evt) => {
  //     // const z = evt.tile.getTileCoord()[0];
  //     const features = evt.tile.getFeatures();
  //     features.forEach((feat) => {
  //       feat.setProperties(properties);
  //     });
  //   });
  //   // console.log(vectorTileLayer.getSource(), 'sourcex');
  //   // const features = vectorTileLayer.getSource().getFeatures();
  //   // features.forEach((feat) => {
  //   //   feat.setProperties(properties);
  //   // });
  // }, [vectorTileLayer, properties]);

  // useEffect(() => {
  //   const featuresForZ = [];

  //   vectorTileLayer.getSource().on('tileloadend', evt => {
  //     const z = evt.tile.getTileCoord()[0];
  //     const feature = evt.tile.getFeatures();
  //     if (!Array.isArray(featuresForZ[z])) {
  //       featuresForZ[z] = [];
  //     }
  //     featuresForZ[z] = featuresForZ[z].concat(feature);
  //   });
  //   setFeatures(featuresForZ);
  // }, []);

  // useEffect(() => {
  //   if (!map) return;
  //   const extent = olExtent.createEmpty();
  //   if (isExtentValid(extent)) {
  //     map.getView().fit(extent, {
  //       padding: [50, 50, 50, 50],
  //       duration: 500,
  //       constrainResolution: true,
  //     });
  //   }
  // }, [map]);

  // cleanup
  useEffect(() => () => map && map.removeLayer(vectorTileLayer), [map, vectorTileLayer]);

  return null;
};

export default VectorTileLayer;
