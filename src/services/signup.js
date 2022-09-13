/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const signupUser = (params) => authenticated(api).post(`/users/user/`, params);
