import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import toastActions from '@Actions/toast';
import loaderActions from '@Actions/loader.actions';
import { getProjectLayerData } from '@Services/individualProject';
import projectActions, { Types } from '@Actions/individualProject';

export function* getProjectLayerDataRequest(action) {
  const { type, params } = action;
  try {
    yield put(
      loaderActions.startAction({
        action: {
          name: type,
        },
      }),
    );

    const response = yield call(getProjectLayerData, params);
    yield put(projectActions.getProjectLayerDataSuccess({ data: response.data }));
  } catch (error) {
    // yield put(redirectActions.getStatusCode(error?.response?.status));
    // if (error?.response?.status >= 400) {
    //   yield put(push('/redirect'));
    // }
    yield put(projectActions.getProjectLayerDataFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } finally {
    yield put(
      loaderActions.stopAction({
        name: type,
      }),
    );
  }
}

function* individualProjectWatcher() {
  yield takeLatest(Types.GET_PROJECT_LAYER_DATA_REQUEST, getProjectLayerDataRequest);
}

export default individualProjectWatcher;
