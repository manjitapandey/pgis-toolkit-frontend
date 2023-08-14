/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const postRequestForDemo = (params) => api.post('/api/projects/request_demo/', params);
