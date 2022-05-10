import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import login from './login';
import toast from './toast';
import loader from './loader.reducer';
import individualOrganizations from './individualOrganizations';
import individualProject from './individualProject';
import popup from './popup';

export default combineReducers({
  router: connectRouter(history),
  login,
  toast,
  loader,
  individualOrganizations,
  individualProject,
  popup,
});
