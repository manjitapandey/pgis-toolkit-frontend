/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromLonLat } from 'ol/proj';
import MapContainer from '@Components/common/OpenLayersComponent/MapContainer';
import VectorTileLayer from '@Components/common/OpenLayersComponent/Layers/VectorTileLayer';
import FullScreenControl from '@Components/common/OpenLayersComponent/Control/FullScreenControl';
import CustomLayerSwitcher from '@Components/common/OpenLayersComponent/LayerSwitcher/CustomLayerSwitcher';
import ZoomControl from '@Components/common/OpenLayersComponent/Control/ZoomControl';
import useOLMap from '@Components/common/OpenLayersComponent/useOLMap';
import Scalebar from '@Components/common/OpenLayersComponent/Scalebar';
import individualActions, { Creators } from '@Actions/individualProject';
import { switcherOptions } from '@src/constants/commonData';
import MeasureControl from '@Components/common/OpenLayersComponent/Control/MeasureControl';
import { selectedLayerStyleSelector } from '@Selectors/individualProject';
import { defaultStyles } from '@Components/common/OpenLayersComponent/helpers/styleUtils';
import DownloadControl from '@Components/common/OpenLayersComponent/Control/DownloadControl';

const { BASE_URL } = process.env;
const { setZoomToLayerId } = Creators;

const OlMap = () => {
  const dispatch = useDispatch();
  const windowHeight = window.innerHeight;
  const mapToggle = useSelector((state) => state.individualProject.mapToggle);
  const geomData = useSelector((state) => state.individualProject.geomData);
  const selectedLayerId = useSelector((state) => state.individualProject.selectedLayerId);
  const projectHeaderHeight = useSelector((state) => state.projectHeader.projectHeaderHeight);
  const zoomToLayerId = useSelector((state) => state.individualProject.zoomToLayerId);
  const isLayerLoading = useSelector((state) => state.individualProject.isLayerLoading);
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

  // reset zoom to layer for second press
  useEffect(() => {
    if (!map || !zoomToLayerId) return;
    const timeout = setTimeout(() => {
      dispatch(setZoomToLayerId(null));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dispatch, map, zoomToLayerId, map]);
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
                key={item.id}
                url={`${BASE_URL}/maps/layer_vectortile/{z}/{x}/{y}/?layer=${item.id}&sub_layer=`}
                authToken={authToken}
                style={
                  selectedLayerId
                    ? selectedLayerStyle
                    : item?.style?.fillColor
                    ? { ...item?.style }
                    : { ...defaultStyles }
                }
                // style={item?.style || selectedLayerStyle}
                zoomToLayer={item?.id === zoomToLayerId}
                bbox={item?.bbox}
              />
            ))}
          {geomData &&
            geomData?.map((item) => (
              <VectorTileLayer
                key={item.id}
                url={`${BASE_URL}/maps/layer_vectortile/{z}/{x}/{y}/?layer=${item.id}&sub_layer=`}
                authToken={authToken}
                tyle={
                  selectedLayerId
                    ? selectedLayerStyle
                    : item?.style?.fillColor
                    ? { ...item?.style }
                    : { ...defaultStyles }
                }
                // style={item?.style || selectedLayerStyle}
                zoomToLayer={item?.id === zoomToLayerId}
                bbox={item?.bbox}
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
        <div className="map-buttons">
          {/* <DownloadControl mapRef={mapRef} /> */}
          {isLayerLoading && (
            <div className="map-loader-container">
              <div className="map-loader-wrapper">
                <div className="map-loader" />
              </div>
            </div>
          )}
        </div>
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
