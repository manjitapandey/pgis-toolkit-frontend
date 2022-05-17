import { all } from 'redux-saga/effects';
import individualProjectWatcher from './individualProject';
import loginWatcher from './login';
import organizationWatcher from './organizations';

function* rootSaga() {
  yield all([loginWatcher(), organizationWatcher(), individualProjectWatcher()]);
}

export default rootSaga;
