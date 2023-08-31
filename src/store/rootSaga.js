import { all, fork } from "redux-saga/effects";

import productSaga from "./ProductSaga";
import releaseSaga from "./ReleaseSaga";

export default function* rootSaga() {
  yield all([fork(productSaga), fork(releaseSaga)]);
}
