import { put, takeEvery } from "redux-saga/effects";

// product Redux States
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "./actionTypes";

import {
  getAllProductSlice,
  getAllProductFailureSlice,
  getProductByIdSlice,
} from "./ProductSlice";

import { getAllProductsWithReleases, getProductById } from "../api";

function* fetchProducts(action) {
  try {
    const response = yield getAllProductsWithReleases(action.payload);
    yield put(getAllProductSlice(response?.data.data));
  } catch (error) {
    yield put(getAllProductFailureSlice(error));
    console.error(error);
  }
}
function* fetchProductById(action) {
  try {
    const response = yield getProductById(action.payload);
    yield put(getProductByIdSlice(response?.data.data));
  } catch (error) {
    yield put(getAllProductFailureSlice(error));
    console.error(error);
  }
}

export default function* productSaga() {
  yield takeEvery(GET_ALL_PRODUCTS, fetchProducts);
  yield takeEvery(GET_PRODUCT_BY_ID, fetchProductById);
}
