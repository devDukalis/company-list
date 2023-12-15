import { combineReducers } from "@reduxjs/toolkit";

import companyReducer from "@/redux/features/companySlice";

const rootReducer = combineReducers({
  companies: companyReducer,
});

export default rootReducer;
