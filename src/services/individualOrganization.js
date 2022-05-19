/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getIndividualOrganizationData = (params) =>
  authenticated(api).get(`/projects/project/?organization=${params}`);

export const getOrganizationDetailData = (params) => authenticated(api).get(`/projects/organization/${params}`);
