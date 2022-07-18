/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getPermission = (params) => authenticated(api).get(`/users/permissions/`, { params });
