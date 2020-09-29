import { combineReducers } from '@reduxjs/toolkit';
import { user } from "./User/userSlice";
import { auth } from "./Auth/authSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user,
  auth,
});
