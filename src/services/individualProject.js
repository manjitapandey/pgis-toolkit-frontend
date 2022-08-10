/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getProjectLayerData = (params) => authenticated(api).get(`/maps/project_layers/${params}`);

export const getThemeList = (params) => authenticated(api).get(`/maps/theme/`, { params });

export const getProjectTheme = (params) => authenticated(api).get(`/maps/project_theme_layers/`, { params });

export const getIndividualProjectData = (params) => authenticated(api).get(`/projects/project_detail/`, { params });

export const getIndividualLayerData = (params) => authenticated(api).get(`/maps/layer/${params}`);

export const getIndividualSubLayerData = (params) => authenticated(api).get(`/maps/sub_layer/${params}`);

export const getLayerTemplateList = (params) => authenticated(api).get('/projects/layer_template/', params);

export const getTaskResponse = (params) => authenticated(api).get(`/maps/get_layer_upload_task_response/`, { params });

export const getGroupList = (params) => authenticated(api).get(`/maps/layer_group/`, { params });

export const getFeatureCollection = (params) => authenticated(api).get(`/maps/feature_collection/`, { params });

export const getFeatureById = (params) => authenticated(api).get(`/maps/feature/${params}/`);

export const updateFeatureById = (id, data) => authenticated(api).patch(`/maps/feature_collection/${id}/`, data);

export const getStandardIcons = () => authenticated(api).get(`/maps/standard_icon/`);

export const getAttributeAlias = (params) => authenticated(api).get(`/maps/layer_attribute/`, { params });

export const postGroupData = (payload) => authenticated(api).post(`/maps/layer_group/`, payload);

export const postUploadData = (payload) => authenticated(api).post('/maps/layer/', payload);

export const postLayerData = (id, data) => authenticated(api).patch(`/maps/layer/${id}/`, data);

export const postSubLayerData = (id, data) => authenticated(api).patch(`/maps/sub_layer/${id}/`, data);

export const postThemeData = (payload) => authenticated(api).post('/maps/theme/', payload);

export const deleteLayerData = (id, data) => authenticated(api).patch(`/maps/layer/${id}/`, data);
