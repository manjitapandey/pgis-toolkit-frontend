/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Vector as VectorSource } from 'ol/source';
import OLVectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { get } from 'ol/proj';
import { getUid } from 'ol/util';
import { Modify, Select, Translate } from 'ol/interaction';
import { shiftKeyOnly, singleClick } from 'ol/events/condition';
import getFeatureGeojson from '../helpers/getFeatureGeojson';
import './styles.scss';

const EditableLayer = ({ map, geojson, zIndex = 2, onSave, onCancel }) => {
  const [vectorLayer, setVectorLayer] = useState(null);
  const [modifiedStates, setModifiedStates] = useState([]);
  // const [modifiedFeature, setModifiedFeature] = useState(null);
  const [drawType, setDrawType] = useState(null);
  const layerUid = useRef(null);

  // initialize select interaction
  const select = useMemo(
    () =>
      new Select({
        wrapX: false,
        filter: (_, layer) => layerUid?.current === layer.ol_uid,
      }),
    [],
  );

  // initialize modify interaction
  const modify = useMemo(
    () =>
      new Modify({
        features: select.getFeatures(),
        deleteCondition: (event) => shiftKeyOnly(event) && singleClick(event),
      }),
    [select],
  );

  // initialize translate interaction
  const translate = useMemo(
    () =>
      new Translate({
        features: select.getFeatures(),
      }),
    [select],
  );

  // clean up on geojson remove
  useEffect(() => {
    if (!map || geojson || !vectorLayer) return;
    map.removeInteraction(select);
    map.removeInteraction(translate);
    map.removeInteraction(modify);
    select.getFeatures().clear();
    setDrawType(null);
    map.removeLayer(vectorLayer);
  }, [map, vectorLayer, geojson, select, translate, modify]);

  // add geojson for edit feature
  useEffect(() => {
    if (!map || !geojson) return;
    const features = new GeoJSON().readFeatures(geojson, {
      featureProjection: get('EPSG:3857'),
    });
    const vectorLyr = new OLVectorLayer({
      source: new VectorSource({
        features,
      }),
      zIndex: zIndex + 1,
      declutter: true,
    });
    layerUid.current = getUid(vectorLyr);
    map.addLayer(vectorLyr);
    setVectorLayer(vectorLyr);
    select.getFeatures().push(features[0]);
    setModifiedStates([geojson]);
  }, [map, geojson, zIndex, select]);

  // add select interaction
  useEffect(() => {
    if (!map || !geojson) return;
    map.addInteraction(select);
  }, [map, geojson, select, modify, translate]);

  // add select interaction
  useEffect(() => {
    if (!map || !geojson) return;
    if (drawType === 'edit') {
      map.removeInteraction(translate);
      map.addInteraction(modify);
    }
    if (drawType === 'drag') {
      map.removeInteraction(modify);
      map.addInteraction(translate);
    }
    if (!drawType) {
      map.removeInteraction(modify);
      map.removeInteraction(translate);
    }
  }, [map, geojson, modify, translate, drawType]);

  // on translate finish
  useEffect(() => {
    translate.on('translateend', (e) => {
      const features = e.features.getArray();
      const featureGeojson = getFeatureGeojson(features[0]);
      setModifiedStates((prev) => [...prev, featureGeojson]);
      // setModifiedFeature(features[0]);
    });
  }, [translate]);

  // on modify finish
  useEffect(() => {
    modify.on('modifyend', (e) => {
      const features = e.features.getArray();
      const featureGeojson = getFeatureGeojson(features[0]);
      setModifiedStates((prev) => [...prev, featureGeojson]);
      // setModifiedFeature(features[0]);
    });
  }, [modify]);

  // on undo click
  const handleUndo = () => {
    if (modifiedStates.length === 1) return;
    const source = vectorLayer.getSource();
    source.clear();
    const previousModifiedFeature = modifiedStates[modifiedStates.length - 2];
    source.addFeature(
      new GeoJSON().readFeature(previousModifiedFeature, {
        featureProjection: get('EPSG:3857'),
      }),
    );
    setModifiedStates((prev) => prev.filter((_, index) => index < prev.length - 1));
    const newFeature = source.getFeatures()[0];
    select.getFeatures().push(newFeature);
  };

  // on save click
  const handleSave = () => {
    const lastModifiedFeature = modifiedStates[modifiedStates.length - 1];
    if (!lastModifiedFeature) return;
    onSave(lastModifiedFeature);
  };

  if (!geojson) return '';

  return (
    <div className="toolbar__container">
      <div className="toolbar__title">
        <h6>Edit Toolbar</h6>
      </div>
      <div className="toolbar__items">
        <button type="button" title="Drag" onClick={() => setDrawType('drag')}>
          <i className="material-icons">open_with</i>
        </button>
        <button type="button" title="Edit" onClick={() => setDrawType('edit')}>
          <i className="material-icons">timeline</i>
        </button>
        <button type="button" title="Undo" onClick={handleUndo}>
          <i className="material-icons">undo</i>
        </button>
        <button type="button" title="Save" onClick={handleSave}>
          <i className="material-icons">save</i>
        </button>
        <button type="button" title="Cancel" onClick={onCancel}>
          <i className="material-icons">close</i>
        </button>
      </div>
    </div>
  );
};

export default EditableLayer;
