/* eslint-disable import/prefer-default-export */
import { api, authenticated } from './index';

export const getIndividualOrganizationData = (params) =>
  authenticated(api).get(`/projects/project/?organization=${params}`);
