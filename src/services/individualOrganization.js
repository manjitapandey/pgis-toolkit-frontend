/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getIndividualOrganizationData = (params) =>
  authenticated(api).get(`/projects/project/?organization=${params}`);

export const getIndividualProjectData = (params) => authenticated(api).get(`/projects/project/${params}`);

export const getOrganizationDetailData = (params) => authenticated(api).get(`/projects/organization/${params}`);

export const getProjectCountryData = (payload) => authenticated(api).get('/projects/country/', payload);

export const getProjectStateData = (payload) => authenticated(api).get('/projects/state/', payload);

export const postProjectData = (payload) => authenticated(api).post('/users/preliminary_user_create/', payload);

export const postProjectAdditionalData = (id, payload) => authenticated(api).patch(`/projects/project/${id}/`, payload);

export const deleteProjectData = (id, payload) => authenticated(api).patch(`/projects/project/${id}/`, payload);
