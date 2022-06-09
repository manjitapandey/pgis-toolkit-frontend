/* eslint-disable consistent-return */
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromLonLat } from 'ol/proj';
import MapContainer from '@Components/common/OpenLayersComponent/MapContainer';
import VectorTileLayer from '@Components/common/OpenLayersComponent/Layers/VectorTileLayer';
import FullScreenControl from '@Components/common/OpenLayersComponent/Control/FullScreenControl';
import CustomLayerSwitcher from '@Components/common/OpenLayersComponent/LayerSwitcher/CustomLayerSwitcher';
import ZoomControl from '@Components/common/OpenLayersComponent/Control/ZoomControl';
import useOLMap from '@Components/common/OpenLayersComponent/useOLMap';
import Scalebar from '@Components/common/OpenLayersComponent/Scalebar';
import individualActions from '@Actions/individualProject';
import { switcherOptions } from '@src/constants/commonData';
import MeasureControl from '@Components/common/OpenLayersComponent/Control/MeasureControl';
import { selectedLayerStyleSelector } from '@Selectors/individualProject';
import { defaultStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';
import DownloadControl from '@Components/common/OpenLayersComponent/Control/DownloadControl';
import GetSVGIcon from '@Components/common/GetSVGIcon/index';

const { BASE_URL } = process.env;

const OlMap = () => {
  const dispatch = useDispatch();
  const windowHeight = window.innerHeight;
  const mapToggle = useSelector((state) => state.individualProject.mapToggle);
  const geomData = useSelector((state) => state.individualProject.geomData);
  const selectedLayerId = useSelector((state) => state.individualProject.selectedLayerId);
  const projectHeaderHeight = useSelector((state) => state.projectHeader.projectHeaderHeight);
  const selectedLayerStyle = useSelector(selectedLayerStyleSelector);
  const authToken = '0d133cd783c0bd4288ef0b8dca02de3889845612';
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

  return (
    <div className="dbd-map_cntr is-grow">
      <div className="dbd-map_wrap">
        <MapContainer
          ref={mapRef}
          mapInstance={map}
          className="map"
          // style={{ height: '92vh' }}
          style={{ height: `${windowHeight - projectHeaderHeight}px` }}
        >
          {/* <LayerSwitcherControl />
  <Scalebar /> */}
          {geomData &&
            geomData?.map((item) => (
              <VectorTileLayer
                key={selectedLayerStyle?.bgColor || item?.style?.bgColor}
                url={`${BASE_URL}/maps/layer_vectortile/{z}/{x}/{y}/?layer=${item.id}&sub_layer=`}
                authToken={authToken}
                style={selectedLayerId ? selectedLayerStyle : item?.style || { ...defaultStyles }}
              />
            ))}
          {geomData &&
            geomData?.map((item) => (
              <VectorTileLayer
                key={selectedLayerStyle?.bgColor || item?.style?.bgColor}
                url={`${BASE_URL}/maps/layer_vectortile/{z}/{x}/{y}/?layer=${item.id}&sub_layer=`}
                authToken={authToken}
                style={selectedLayerId ? selectedLayerStyle : item?.style || { ...defaultStyles }}
              />
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
            {/* <a className="sidebar-collapse">
              <i className="material-icons">straighten</i>
        </a> */}
            <a
              className="is-settings"
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(individualActions.handleMapToggle(!mapToggle))}
            >
              <i className="material-icons">crop_free</i>
            </a>
            <MeasureControl map={map} buttonText={<i className="material-icons">straighten</i>} measureBoth />
            <DownloadControl map={map} />
            {/* <FullScreenControl map={map} />

             <a className="">
              <i className="material-icons">info</i>
        </a> */}
          </div>
          <CustomLayerSwitcher map={map} options={switcherOptions} />
          <ZoomControl map={map} />
        </div>
      </div>
    </div>
  );
};

export default OlMap;
