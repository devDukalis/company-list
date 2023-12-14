import { combineReducers } from "@reduxjs/toolkit";

import companyReducer from "@/redux/features/companySlice";
import employeeReducer from "@/redux/features/employeeSlice";

const rootReducer = combineReducers({
  companies: companyReducer,
  employees: employeeReducer,
});

export default rootReducer;
