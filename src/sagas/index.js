import { all } from 'redux-saga/effects';
import individualProjectWatcher from './individualProject';
import loginWatcher from './login';
import organizationWatcher from './organizations';
import individualOrganizatonWatcher from './individualOrganization';
import landing from './landing';
import permission from './permission';
import setCsrfWatcher from './common';
import verifyWatcher from './verifyUser';
import signupWatcher from './signup';
import usersWatcher from './users';

function* rootSaga() {
  yield all([
    loginWatcher(),
    organizationWatcher(),
    individualProjectWatcher(),
    individualOrganizatonWatcher(),
    setCsrfWatcher(),
    landing(),
    permission(),
    verifyWatcher(),
    signupWatcher(),
    usersWatcher(),
  ]);
}

export default rootSaga;
