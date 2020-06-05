import { takeEvery, put, call } from 'redux-saga/effects';

import API from 'services/api';
import {
  FETCH_WINES,
  FetchWinesAction
} from './types';
import {
  fetchWinesSuccess
} from './actions';

function* fetchWines() {
  yield takeEvery(FETCH_WINES, function* (action: FetchWinesAction) {
    try {
      const winesData = yield call(API.fetchWines, action.payload)
      yield put(fetchWinesSuccess(winesData))
    } catch (error) {
      console.log(error)
    }
  })
}

export default function* rootSaga() {
  yield fetchWines();
}