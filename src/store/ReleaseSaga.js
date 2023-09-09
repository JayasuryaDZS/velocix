import { put, takeEvery } from "redux-saga/effects";

// release Redux States
import {
  GET_ALL_DOCUMENTS_BY_RELEASE_ID,
  GET_ALL_RELEASES_BY_ID,
} from "./actionTypes";

import {
  getDocsByReleaseId,
  getDocsByReleaseIdFailure,
  getCategoryByReleaseId,
} from "./ReleaseSlice";

import { getAllDocsByReleaseId, getReleasesWithID } from "../api";

function* fetchDocsByReleasesId(action) {
  try {
    const response = yield getAllDocsByReleaseId(action.payload);
    yield put(getDocsByReleaseId(response?.data.data));
  } catch (error) {
    yield put(getDocsByReleaseIdFailure(error));
    console.error(error);
  }
}

function* getAllCategoryReleasedById(action) {
  try {
    const response = yield getReleasesWithID(action.payload);

    yield put(getCategoryByReleaseId(response?.data.data));
  } catch (error) {
    yield put(getDocsByReleaseIdFailure(error));
    console.error(error);
  }
}
export default function* releaseSaga() {
  yield takeEvery(GET_ALL_DOCUMENTS_BY_RELEASE_ID, fetchDocsByReleasesId);
  yield takeEvery(GET_ALL_RELEASES_BY_ID, getAllCategoryReleasedById);
}
