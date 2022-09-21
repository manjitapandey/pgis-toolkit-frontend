/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const organizationData = (params) => authenticated(api).get(`/projects/organization/`);

export const organizationUsersData = (params) => authenticated(api).get(`/users/user/`, { params });

export const individualUserData = (params) => authenticated(api).get(`/users/user/${params}`);

export const editUserData = (id, payload) => authenticated(api).patch(`/users/user/${id}/`, payload);

export const deleteUserData = (id, payload) => authenticated(api).patch(`/users/user/${id}/`, payload);
