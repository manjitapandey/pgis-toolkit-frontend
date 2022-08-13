/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import { useEffect, useMemo } from 'react';
// import * as olExtent from 'ol/extent';
import VectorTile from 'ol/layer/VectorTile';
import { useDispatch } from 'react-redux';
import Feature from 'ol/Feature';
import MVT from 'ol/format/MVT';
import { fromExtent } from 'ol/geom/Polygon';
import VectorTileSource from 'ol/source/VectorTile';
import { transformExtent } from 'ol/proj';
import getSvgImageIcon from '@Utils/map/getSvgImageIcon';
import SVGMapIcon from '@Utils/map/svgIcon';
import { Creators } from '@Actions/individualProject';
import { Fill, Icon, Stroke, Style, Text } from 'ol/style';
import { LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';
import { getStyles, defaultStyles } from '../helpers/styleUtils';
import { isExtentValid } from '../helpers/layerUtils';

const { setLayerLoading } = Creators;

const VectorTileLayer = ({
  map,
  url,
  style,
  zIndex = 1,
  visibleOnMap = true,
  authToken,
  setStyle,
  zoomToLayer = false,
  bbox = null,
  selectedId,
  // properties,
}) => {
  const dispatch = useDispatch();
  const vectorTileLayer = useMemo(
    () =>
      new VectorTile({
        // renderMode: 'hybrid',
        renderMode: 'vector',
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
    vectorTileLayer.getSource().on('tileloadstart', () => {
      dispatch(setLayerLoading(true));
    });
    vectorTileLayer.getSource().on('tileloadend', () => {
      setTimeout(() => dispatch(setLayerLoading(false)), 4000);
    });
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

  useEffect(() => {
    if (!vectorTileLayer || !map) return;

    if (style?.icon?.url) {
      /* eslint-disable-next-line no-inner-declarations */
      async function fetchMyAPI() {
        /* eslint-disable-next-line no-await-in-loop */
        const image = await getSvgImageIcon(style?.icon?.url, style?.iconColor);
        if (image) {
          vectorTileLayer.setStyle((feature, resolution) =>
            getStyles({
              style: {
                icon: {
                  url: image,
                  icon_size: style?.icon_size,
                },
              },
              feature,
              resolution,
            }),
          );
        }
        //  else {
        //   vectorTileLayer.setStyle((feature, resolution) =>
        //     getStyles({
        //       style: {
        //         ...defaultStyles,
        //         fillOpacity: 0,
        //         lineOpacity: 0,
        //         circleRadius: 0,
        //         lineThickness: 0,
        //       },
        //       feature,
        //       resolution,
        //     }),
        //   );
        // }
      }
      fetchMyAPI();
    } else if (setStyle) {
      vectorTileLayer.setStyle(setStyle);
    } else {
      vectorTileLayer.setStyle((feature, resolution) => getStyles({ style, feature, resolution }));
    }
  }, [map, vectorTileLayer, style, setStyle]);

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

  useEffect(() => {
    if (!map || !vectorTileLayer || !zoomToLayer || !bbox) return;
    const transformedExtent = transformExtent(bbox, 'EPSG:4326', 'EPSG:3857');
    if (!isExtentValid(transformedExtent)) return;
    map.getView().fit(transformedExtent, {
      padding: [50, 50, 50, 50],
      duration: 900,
      constrainResolution: true,
    });
  }, [map, vectorTileLayer, zoomToLayer, bbox]);

  // useEffect(() => {
  //   if (!map || !vectorTileLayer) return;
  //   map.on('pointermove', (event) => {
  //     // vectorTileLayer.clear();
  //     map.forEachFeatureAtPixel(event.pixel, (feature) => {
  //       const geometry = feature.getGeometry();
  //       // if (geometry.type_ === 'Point' || geometry.type_ === 'MultiPoint') {
  //       // } else
  //       if (geometry.type_ === 'Linestring' || geometry.type_ === 'Polygon') {
  //         const previousStyle = vectorTileLayer.getStyle();
  //         console.log(previousStyle, 'sty;e');
  //         // vectorTileLayer.setStyle(
  //         //   new Style({
  //         //     stroke: new Stroke({
  //         //       // color: previousStyle.stroke_.color_,
  //         //       color: style.lineColor,
  //         //       width: style.lineThickness + 2,
  //         //       // lineDash: previousStyle.stroke_.lineDash_,
  //         //     }),
  //         //     fill: new Fill({
  //         //       color: style.fillColor,
  //         //     }),
  //         //     // text: getTextStyles(previousStyle),
  //         //   }),
  //         // );
  //       }
  //     });
  //   });
  // });

  // cleanup
  useEffect(() => () => map && map.removeLayer(vectorTileLayer), [map, vectorTileLayer]);

  return null;
};

export default VectorTileLayer;
