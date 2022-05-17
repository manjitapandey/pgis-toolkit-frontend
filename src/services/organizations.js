/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getOrganizationData = (params) => authenticated(api).get('/projects/organization/', params);
