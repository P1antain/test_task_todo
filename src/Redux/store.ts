import { configureStore } from "@reduxjs/toolkit";
import defaultReducer from "./Reducer/defaultReducer";

export const store = configureStore({
  reducer: {
    default: defaultReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
