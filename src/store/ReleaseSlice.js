import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  releases: [],
  release: {},
  loader: true,
  error: null,
  errors: [],
};

export const releaseSlice = createSlice({
  name: "release",
  initialState: INIT_STATE,
  reducers: {
    getDocsByReleaseId: (state, action) => {
      state.release = action.payload;
      state.loader = false;
      return state;
    },
    getDocsByReleaseIdFailure: (state, action) => {
      state.release = {};
      state.loader = false;
      state.error = action.payload;
      return state;
    },
  },
});

export const { getDocsByReleaseId , getDocsByReleaseIdFailure} = releaseSlice.actions;

export default releaseSlice.reducer;
