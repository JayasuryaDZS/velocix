import { createSlice } from "@reduxjs/toolkit";
import { generateArray } from "../globalservice";

const INIT_STATE = {
  products: [],
  product: {},
  loader: true,
  error: null,
  errors: [],

  mainData: []
};

export const productSlice = createSlice({
  name: "product",
  initialState: INIT_STATE,
  reducers: {
    getAllProductSlice: (state, action) => {
      state.products = action.payload;
      state.loader = false;
      return state;
    },
    getProductByIdSlice: (state, action) => {
      state.product = action.payload;
      state.loader = false;
      return state;
    },
    getOverAllData : (state, action) => {
      let sidebarData = generateArray(action.payload);
      state.mainData = sidebarData;
    },
    getAllProductFailureSlice: (state, action) => {
      state.products = [];
      state.product = {};
      state.loader = false;
      state.error = action.payload;
      return state;
    },
  },
});

export const {
  getAllProductSlice,
  getAllProductFailureSlice,
  getProductByIdSlice,
  getOverAllData
} = productSlice.actions;

export default productSlice.reducer;
