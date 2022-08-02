/* eslint-disable import/prefer-default-export */
import { api } from '@Services/index';

export const setCsrf = () => api.get('/users/set_csrf/');
