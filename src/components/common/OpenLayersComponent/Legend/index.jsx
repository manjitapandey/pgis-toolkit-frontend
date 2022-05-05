/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators, Types } from '@Actions/map';
import { legendItemSelector } from '@Selectors/map';
import LegendItem from '@Components/common/LegendItem';
import { checkIfLoading } from '@Utils/loaderSelector';
import { isEmpty } from '@src/utils/commonUtils';
import './legend.scss';

const { toggleLegend } = Creators;

const MapLegend = () => {
  const legendItems = useSelector(legendItemSelector);
  const layerStyles = useSelector((state) => state.map.layerStyles);
  const selectedLayerId = useSelector((state) => state.map.selectedLayer?.id);
  const selectedLayerStyle = useSelector((state) => state.map.selectedLayerStyle);
  const showLegend = useSelector((state) => state.map.showLegend);
  const isExporting = useSelector((state) => checkIfLoading(state, [Types.EXPORT_MAP_REQUEST]));
  const dispatch = useDispatch();

  const getLayerStyle = useCallback(
    (id) => (id === selectedLayerId ? selectedLayerStyle : layerStyles[id]?.style),
    [layerStyles, selectedLayerStyle, selectedLayerId],
  );

  if (isEmpty(legendItems)) return '';

  return (
    <div className="map-legend" id="map-legend">
      <div className="legend-title">
        <h6>Legend</h6>
        {!isExporting && (
          <span
            role="presentation"
            title={showLegend ? 'Minimize' : 'Maximize'}
            onClick={() => {
              dispatch(toggleLegend());
            }}
            onKeyUp={() => {}}
          >
            <i className="material-icons">{showLegend ? 'expand_more' : 'expand_less'}</i>
          </span>
        )}
      </div>

      {showLegend && (
        <div className="legend-container">
          <div>
            {legendItems.map(({ name, id }) => (
              <div key={id} className="legend-item">
                <LegendItem styles={getLayerStyle(id)} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapLegend;
