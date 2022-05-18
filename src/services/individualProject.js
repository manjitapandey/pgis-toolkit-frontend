/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getProjectLayerData = (params) => authenticated(api).get(`/maps/project_layers/${params}`);

export const getLayerTemplateList = (params) => authenticated(api).get('/projects/layer_template/', params);
