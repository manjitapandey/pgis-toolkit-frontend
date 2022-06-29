/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const postRequestForDemo = (params) => api.post('/projects/request_demo/', params);
