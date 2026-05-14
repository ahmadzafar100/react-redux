import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import infoReducer from "./slice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
    users: userReducer,
  },
});
