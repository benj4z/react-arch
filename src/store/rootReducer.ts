import { combineReducers } from '@reduxjs/toolkit';
import { auth } from "./auth/authSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  auth,
});
