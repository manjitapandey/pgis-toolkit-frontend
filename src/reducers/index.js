import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import login from './login';
import toast from './toast';
import loader from './loader.reducer';
import individualOrganizations from './individualOrganization';
import individualProject from './individualProject';
import popup from './popup';
import organizations from './organizations';
import projectHeader from './projectHeader';
import layerPopup from './IndividualProject/layerPopup';
import detailPopup from './IndividualProject/detailPopup';
import layerStyle from './IndividualProject/layerStyle';
import datasetPopup from './IndividualProject/datasetPopup';
import landing from './landing';
import pagination from './pagination';
import permission from './permission';
import verifyUser from './verifyUser';
import signup from './signup';
import users from './users';

export default combineReducers({
  router: connectRouter(history),
  login,
  toast,
  loader,
  individualOrganizations,
  individualProject,
  popup,
  organizations,
  projectHeader,
  layerPopup,
  landing,
  detailPopup,
  layerStyle,
  datasetPopup,
  pagination,
  permission,
  verifyUser,
  signup,
  users,
});
