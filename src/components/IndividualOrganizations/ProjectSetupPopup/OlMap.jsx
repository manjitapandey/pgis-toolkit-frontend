/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { fromLonLat } from 'ol/proj';
import MapContainer from '@Components/common/OpenLayersComponent/MapContainer';
import useOLMap from '@Components/common/OpenLayersComponent/useOLMap';
import CustomLayerSwitcher from '@Components/common/OpenLayersComponent/LayerSwitcher/CustomLayerSwitcher';
import ZoomControl from '@Components/common/OpenLayersComponent/Control/ZoomControl';
import { geomTypes } from '@src/constants/commonData';
import LayerSwitcherControl from '@Components/common/OpenLayersComponent/LayerSwitcher/index';
import Select from '@Components/common/Select/index';
import DrawLayer from '@Components/common/OpenLayersComponent/CustomLayer/DrawLayer';
import { Creators } from '@Actions/individualOrganization';

const { setGeometry } = Creators;

const OLMap = () => {
  const { mapRef, map, renderComplete } = useOLMap({
    center: fromLonLat([85.3, 27.7]),
    zoom: 2,
    maxZoom: 21,
  });
  const [drawType, setDrawType] = useState('Point');

  const handleSelect = (name) => {
    setDrawType(name);
  };

  return (
    <>
      <Select
        options={geomTypes}
        className="pm-select_100 mb-10"
        handleSelect={handleSelect}
        selected={drawType || 'Select'}
      />
      <div className="dbd-map_wrap">
        <MapContainer
          ref={mapRef}
          mapInstance={map}
          className="map"
          // className="map leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-touch-drag leaflet-touch-zoom"
          style={{ height: '57vh' }}
        >
          <LayerSwitcherControl />
          <DrawLayer map={map} drawType={drawType} setGeometry={setGeometry} />
          {/*  <LayerSwitcherControl />
          <Scalebar /> */}
        </MapContainer>

        <div className="map-setting is-bottom is-right">
          <ZoomControl map={map} />
        </div>
      </div>
    </>
  );
};

export default OLMap;
