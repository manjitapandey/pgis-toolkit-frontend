/* eslint-disable import/prefer-default-export */
import { api, authenticated, downloadApi } from './index';

export const postRequestForDemo = (params) => api.post('/api/projects/request_demo/', params);
export const getFileForDownload = (params) => downloadApi.get('/api/maps/bulk_base_template_download/', { params });
