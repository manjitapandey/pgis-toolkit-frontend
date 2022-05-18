import { all } from 'redux-saga/effects';
import individualProjectWatcher from './individualProject';
import loginWatcher from './login';
import organizationWatcher from './organizations';
import individualOrganizatonWatcher from './individualOrganization';

function* rootSaga() {
  yield all([loginWatcher(), organizationWatcher(), individualProjectWatcher(), individualOrganizatonWatcher()]);
}

export default rootSaga;
