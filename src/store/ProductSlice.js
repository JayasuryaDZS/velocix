import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  products: [],
  product: {},
  loader: true,
  error: null,
  errors: [],
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
} = productSlice.actions;

export default productSlice.reducer;
