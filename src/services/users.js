/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const organizationData = (params) => authenticated(api).get(`/projects/organization/`);

export const individualOrganizationData = (params) => authenticated(api).get(`/projects/organization/`, { params });

export const organizationUsersData = (params) => authenticated(api).get(`/users/user/`, { params });

export const getUserGroupList = (params) => authenticated(api).get(`/users/user_group/`, { params });

export const getProjectList = (params) => authenticated(api).get(`projects/project/?organization=${params}`);

export const individualUserData = (params) => authenticated(api).get(`/users/user/${params}`);

export const editUserData = (id, payload) => authenticated(api).patch(`/users/user/${id}/`, payload);

export const deleteUserData = (id, payload) => authenticated(api).patch(`/users/user/${id}/`, payload);

export const postAssignUserData = (payload) => authenticated(api).post(`/users/preliminary_user_create/`, payload);
