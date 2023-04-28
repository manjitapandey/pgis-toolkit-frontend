/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Vector as VectorSource } from 'ol/source';
import OLVectorLayer from 'ol/layer/Vector';
import Draw from 'ol/interaction/Draw';
import WKT from 'ol/format/WKT';
import './styles.scss';

const DrawLayer = ({ map, drawType, setGeometry }) => {
  const dispatch = useDispatch();
  const [vectorLayer, setVectorLayer] = useState(null);
  let draw; // global so we can remove it later

  // add geojson for add feature
  useEffect(() => {
    if (!map) return;

    const vectorLyr = new OLVectorLayer({
      source: new VectorSource({ wrapX: false }),
      //   zIndex: zIndex + 1,
      declutter: true,
    });

    map.addLayer(vectorLyr);
    setVectorLayer(vectorLyr);
  }, [map]);

  useEffect(() => {
    if (!map) return;
    function addInteraction() {
      if (drawType !== 'None') {
        draw = new Draw({
          source: vectorLayer,
          type: drawType,
        });
        map.addInteraction(draw);
      }
      draw.on('drawend', (evt) => {
        map.removeInteraction(draw);
        const coordinate = evt.feature.getGeometry().transform('EPSG:3857', 'EPSG:4326').getCoordinates();
        const format = new WKT();
        const wkt = format.writeGeometry(evt.feature.getGeometry());
        dispatch(setGeometry(wkt));
        const feature = format.readFeature(wkt, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        });

        const vectors = new OLVectorLayer({
          source: new VectorSource({
            features: [feature],
          }),
        });
        vectors.setProperties({ name: 'addedPoint' });

        map.addLayer(vectors);
      });
    }

    addInteraction();
  }, [map, drawType]);

  //   drawType.onchange = function () {
  //     map.removeInteraction(draw);
  //     addInteraction();
  //   };

  return <></>;
};

export default DrawLayer;
