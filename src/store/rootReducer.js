import { combineReducers } from "redux";

import ProductSlice from "./ProductSlice";
import ReleaseSlice from "./ReleaseSlice";

const rootReducer = combineReducers({
  products: ProductSlice,
  releases: ReleaseSlice,
});

export default rootReducer;
