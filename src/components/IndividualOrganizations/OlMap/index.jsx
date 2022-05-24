/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromLonLat } from 'ol/proj';
import MapContainer from '@Components/common/OpenLayersComponent/MapContainer';
import useOLMap from '@Components/common/OpenLayersComponent/useOLMap';
import Scalebar from '@Components/common/OpenLayersComponent/Scalebar';
import individualActions from '@Actions/individualOrganization';
// import MapLegend from '@Components/common/OpenLayersComponent/Legend';
import '@Components/common/OpenLayersComponent/map.scss';
import CustomLayerSwitcher from '@Components/common/OpenLayersComponent/LayerSwitcher/CustomLayerSwitcher';
import ZoomControl from '@Components/common/OpenLayersComponent/Control/ZoomControl';
import { switcherOptions, vectorTileData } from '@src/constants/commonData';
import VectorTileLayer from '@Components/common/OpenLayersComponent/Layers/VectorTileLayer';

import { defaultStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';

const OlMap = () => {
  const dispatch = useDispatch();
  const mapToggle = useSelector((state) => state.individualOrganizations.mapToggle);
  const { mapRef, map, renderComplete } = useOLMap({
    center: fromLonLat([85.3, 27.7]),
    zoom: 2,
    maxZoom: 21,
  });
  // update map size on sidebar toggle
  useEffect(() => {
    if (!map) return;
    const timer = setTimeout(() => {
      map.updateSize();
    }, 500);

    return () => clearTimeout(timer);
  }, [map, mapToggle]);
  console.log(vectorTileData, 'vectorTileData');
  return (
    <div className="dbd-map_cntr is-grow">
      <div className="dbd-map_wrap">
        <MapContainer
          ref={mapRef}
          mapInstance={map}
          className="map"
          // className="map leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-touch-drag leaflet-touch-zoom"
          style={{ height: '75vh' }}
        >
          {/*  <LayerSwitcherControl />
          <Scalebar /> */}

          {vectorTileData.map((item) => (
            <VectorTileLayer url={item.url} />
          ))}
          {vectorTileData.map((item) => (
            <VectorTileLayer url={item.url} />
          ))}
        </MapContainer>
        <a
          className={
            mapToggle
              ? 'map-aside_toggle is-square is-xs is-border is-radius-4 is-active'
              : 'map-aside_toggle is-square is-xs is-border is-radius-4'
          }
          onClick={() => dispatch(individualActions.handleMapToggle(!mapToggle))}
        >
          <i className="material-icons left-icon">chevron_left</i>
          <div className="right-icon">
            <div className="text-change is-flex is-start is-align-center ">
              <i className="material-icons ">chevron_right</i>
              <span>Showlist</span>
            </div>
          </div>
        </a>
        <div className="map-setting is-bottom is-right">
          <div className="setting-list" title="Tools">
            <a className="sidebar-collapse">
              <i className="material-icons">straighten</i>
            </a>
            <a className="is-settings">
              <i className="material-icons">crop_free</i>
            </a>

            <a className="">
              <i className="material-icons">info</i>
            </a>
          </div>
          <CustomLayerSwitcher map={map} options={switcherOptions} />
          <ZoomControl map={map} />
        </div>
      </div>
    </div>
  );
};

export default OlMap;
