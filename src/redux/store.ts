import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
