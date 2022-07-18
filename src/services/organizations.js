/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getOrganizationData = (params) => authenticated(api).get('/projects/organization/', { params });

export const postOrganizationData = (payload) => authenticated(api).post('/users/preliminary_user_create/', payload);

export const deleteOrganization = (id, data) => authenticated(api).patch(`/projects/organization/${id}/`, data);
