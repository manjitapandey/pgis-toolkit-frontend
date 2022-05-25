/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getProjectLayerData = (params) => authenticated(api).get(`/maps/project_layers/${params}`);

export const getLayerTemplateList = (params) => authenticated(api).get('/projects/layer_template/', params);

export const getTaskResponse = (params) => authenticated(api).get(`/maps/get_layer_upload_task_response/`, { params });

export const postUploadData = (payload) => authenticated(api).post('/maps/layer/', payload);

export const postThemeData = (payload) => authenticated(api).post('/maps/theme/', payload);

export const deleteLayerData = (id, data) => authenticated(api).patch(`/maps/layer/${id}/`, data);
