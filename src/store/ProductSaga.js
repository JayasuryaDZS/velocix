import { put, takeEvery } from "redux-saga/effects";

// product Redux States
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_ALL_DATA } from "./actionTypes";

import {
  getAllProductSlice,
  getAllProductFailureSlice,
  getProductByIdSlice,
  getOverAllData
} from "./ProductSlice";

import { getAllProductsWithReleases, getProductById, getAllData } from "../api";

function* fetchProducts(action) {
  try {
    const response = yield getAllProductsWithReleases(action.payload);
    console.log(response.data.data, "Checking the data in saga 17 ---> Product Saga");
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

function* fetchAllData() {
  try {
    const response = yield getAllProductsWithReleases();
    const overallData = response.data.data;
    const response1 = yield getAllData();
    const categoryData = response1.data.data;
    yield put(getOverAllData({overallData, categoryData}));
  } catch (error) {
    
  }
}

export default function* productSaga() {
  yield takeEvery(GET_ALL_PRODUCTS, fetchProducts);
  yield takeEvery(GET_PRODUCT_BY_ID, fetchProductById);
  yield takeEvery(GET_ALL_DATA, fetchAllData);
}
