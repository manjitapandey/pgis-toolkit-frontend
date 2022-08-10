import { all } from 'redux-saga/effects';
import individualProjectWatcher from './individualProject';
import loginWatcher from './login';
import organizationWatcher from './organizations';
import individualOrganizatonWatcher from './individualOrganization';
import landing from './landing';
import permission from './permission';
import setCsrfWatcher from './common';

function* rootSaga() {
  yield all([
    loginWatcher(),
    organizationWatcher(),
    individualProjectWatcher(),
    individualOrganizatonWatcher(),
    setCsrfWatcher(),
    landing(),
    permission(),
  ]);
}

export default rootSaga;
