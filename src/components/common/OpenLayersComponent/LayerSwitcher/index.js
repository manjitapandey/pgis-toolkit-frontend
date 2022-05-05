import 'ol-layerswitcher/dist/ol-layerswitcher.css';

import LayerGroup from 'ol/layer/Group';
import LayerTile from 'ol/layer/Tile';
import SourceOSM from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import { useEffect } from 'react';
import LayerSwitcher from 'ol-layerswitcher';

import { XYZ } from 'ol/source';

// const mapboxOutdoors = new MapboxVector({
//   styleUrl: 'mapbox://styles/geovation/ckpicg3of094w17nyqyd2ziie',
//   accessToken: 'pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
// });

const mapboxOutdoors = (visible = false) =>
  new LayerTile({
    title: 'Mapbox Outdoors',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      // url:
      //   'https://api.mapbox.com/styles/v1/geovation/ckpicg3of094w17nyqyd2ziie/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      url: 'https://api.mapbox.com/styles/v1/geovation/ckqxdqbcs9ci818pdgb8jpn3u/tiles/256/%7Bz%7D/%7Bx%7D/%7By%7D@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      layer: 'topoMap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const topoMap = (visible = false) =>
  new LayerTile({
    title: 'Topo Map',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      layer: 'topoMap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });
const mapboxMap = (visible = true) =>
  new LayerTile({
    title: 'Mapbox Light',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://api.mapbox.com/styles/v1/nishon-naxa/ckgkuy7y08rpi19qk46sces9c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmlzaG9uLW5heGEiLCJhIjoiY2s5Nzl3MnoyMDQ5ZzNscHJ0eTZvOHBrcCJ9.JL4lV84Jv8Wi1cYNhJilPA',
      layer: 'topoMap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const monochrome = (visible = false) =>
  new LayerTile({
    title: 'Monochrome',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://api.mapbox.com/styles/v1/geovation/ckqxdp7rd0t5d17lfuxm259c7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      layer: 'topomap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const monochromeMidNight = (visible = false) =>
  new LayerTile({
    title: 'Monochrome Midnight',
    type: 'base',
    visible,
    source: new XYZ({
      attributions:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://api.mapbox.com/styles/v1/geovation/ckqxdsqu93r0417mcbdc102nb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvdmF0aW9uIiwiYSI6ImNrcGljOXBwbTBoc3oyb3BjMGsxYW9wZ2EifQ.euYtUXb6HJGLHkj4Wi3gjA',
      layer: 'topomap',
      maxZoom: 19,
      crossOrigin: 'Anonymous',
    }),
  });

const osm = (visible = false) =>
  new LayerTile({
    title: 'OSM',
    type: 'base',
    visible,
    source: new SourceOSM(),
  });

const watercolor = new LayerTile({
  title: 'Water color',
  type: 'base',
  visible: false,
  source: new SourceStamen({
    layer: 'watercolor',
  }),
});

const baseMaps = new LayerGroup({
  title: 'Base maps',
  layers: [osm(), watercolor, topoMap(), mapboxMap(), mapboxOutdoors(), monochrome(), monochromeMidNight()],
});

const layerSwitcher = new LayerSwitcher({
  reverse: true,
  groupSelectStyle: 'group',
});

const LayerSwitcherControl = ({ map }) => {
  useEffect(() => {
    if (!map) return;
    map.addLayer(baseMaps);
    map.addControl(layerSwitcher);
  }, [map]);

  return null;
};
export { osm, topoMap, mapboxMap, mapboxOutdoors, monochrome, monochromeMidNight };
export default LayerSwitcherControl;
