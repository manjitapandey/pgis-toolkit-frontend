/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { Fill, Icon, Stroke, Style, Text } from 'ol/style';
import { LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';

const getTextStyles = (previousStyle) =>
  previousStyle.text_
    ? new Text({
        text: previousStyle.text_.text_,
        font: previousStyle.text_.font_,
        overflow: previousStyle.text_.overflow_,
        fill: new Fill({ color: previousStyle.text_.fill_.color_ }),
        stroke: new Stroke({
          color: previousStyle.text_.stroke_.color_,
          width: previousStyle.text_.stroke_.width_,
        }),
        offsetX: previousStyle.text_.offestX_,
        offsetY: previousStyle.text_.offsetY_,
      })
    : new Text({});

const HoverEffects = ({ disableEffectField, map }) => {
  let hovered = null;

  useEffect(() => {
    if (!map) return () => {};

    map.on('pointermove', (event) => {
      const feature = map.forEachFeatureAtPixel(event.pixel, (featurex) => featurex);
      if (hovered !== null) {
        if (hovered.getGeometry() instanceof Point || hovered.getGeometry() instanceof MultiPoint) {
          const disableHover = hovered.values_[disableEffectField];
          if (disableHover) {
            const previousStyle = hovered.getStyle();
            hovered.setStyle(
              new Style({
                image: new Icon({
                  anchor: previousStyle.image_.anchor_,
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  src: previousStyle?.image_?.iconImage_?.src_,
                  scale: previousStyle.image_.scale_ - 0.1,
                  crossOrigin: 'anonymous',
                }),
                text: getTextStyles(previousStyle),
              }),
            );
            hovered = null;
          }
        } else if (hovered.getGeometry() instanceof LineString || hovered.getGeometry() instanceof MultiLineString) {
          const disableHover = hovered.values_[disableEffectField];
          if (disableHover) {
            const previousStyle = hovered.getStyle();
            hovered.setStyle(
              new Style({
                stroke: new Stroke({
                  color: previousStyle.stroke_.color_,
                  width: previousStyle.stroke_.width_ - 1,
                  lineDash: previousStyle.stroke_.lineDash_,
                }),
                fill: new Fill({
                  color: previousStyle.fill_.color_,
                }),
                text: getTextStyles(previousStyle),
              }),
            );
            hovered = null;
          }
        } else if (hovered.getGeometry() instanceof Polygon || hovered.getGeometry() instanceof MultiPolygon) {
          const disableHover = hovered.values_[disableEffectField];
          if (disableHover) {
            const previousStyle = hovered.getStyle();
            hovered.setStyle(
              new Style({
                stroke: new Stroke({
                  color: previousStyle.stroke_.color_,
                  width: previousStyle.stroke_.width_ - 1,
                  lineDash: previousStyle.stroke_.lineDash_,
                }),
                fill: new Fill({
                  color: previousStyle.fill_.color_,
                }),
                text: getTextStyles(previousStyle),
              }),
            );
            hovered = null;
          }
        }
      }

      if (feature) {
        if (feature.getGeometry().type_ === 'Point' || feature.getGeometry().type_ === 'MultiPoint') {
          console.log(feature, 'ss');
          //   const disableHover = feature.values_[disableEffectField];
          const disableHover = feature;
          if (disableHover) {
            hovered = feature;
            console.log(feature.getStyle(), 'feat');

            const previousStyle = feature.getStyle();
            feature.setStyle(
              new Style({
                image: new Icon({
                  anchor: previousStyle.image_.anchor_,
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  src: previousStyle.image_.iconImage_.src_,
                  scale: previousStyle.image_.scale_ + 0.1,
                  crossOrigin: 'anonymous',
                }),
                text: getTextStyles(previousStyle),
              }),
            );
          }
        } else if (feature.getGeometry() instanceof LineString || feature.getGeometry() instanceof MultiLineString) {
          const disableHover = feature.values_[disableEffectField];
          if (disableHover) {
            hovered = feature;
            const previousStyle = feature.getStyle();
            feature.setStyle(
              new Style({
                stroke: new Stroke({
                  color: previousStyle.stroke_.color_,
                  width: previousStyle.stroke_.width_ + 1,
                  lineDash: previousStyle.stroke_.lineDash_,
                }),
                fill: new Fill({
                  color: previousStyle.fill_.color_,
                }),
                text: getTextStyles(previousStyle),
              }),
            );
          }
        } else if (feature.getGeometry() instanceof Polygon || feature.getGeometry() instanceof MultiPolygon) {
          const disableHover = feature.values_[disableEffectField];
          if (disableHover) {
            hovered = feature;
            const previousStyle = feature.getStyle();
            feature.setStyle(
              new Style({
                stroke: new Stroke({
                  color: previousStyle.stroke_.color_,
                  width: previousStyle.stroke_.width_ + 1,
                  lineDash: previousStyle.stroke_.lineDash_,
                }),
                fill: new Fill({
                  color: previousStyle.fill_.color_,
                }),
                text: getTextStyles(previousStyle),
              }),
            );
          }
        }
      }
    });

    return () => {};
  }, [map]);

  return null;
};

export default HoverEffects;
