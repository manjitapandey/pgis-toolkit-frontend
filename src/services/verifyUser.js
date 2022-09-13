/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const verifyUser = (params) => authenticated(api).get(`/users/preliminary_user_verify/`, { params });
