import { all } from 'redux-saga/effects';
import individualProjectWatcher from './individualProject';
import loginWatcher from './login';
import organizationWatcher from './organizations';
import individualOrganizatonWatcher from './individualOrganization';
import landing from './landing';

function* rootSaga() {
  yield all([
    loginWatcher(),
    organizationWatcher(),
    individualProjectWatcher(),
    individualOrganizatonWatcher(),
    landing(),
  ]);
}

export default rootSaga;
