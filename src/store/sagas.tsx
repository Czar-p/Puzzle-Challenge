import { all, fork } from 'redux-saga/effects'
import {watchFetchImage} from "./images/saga";

export default function* rootSaga() {
    yield all([
        fork(watchFetchImage)
    ])
  }