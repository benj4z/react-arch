import { AppThunk } from "../index";
import { loginIn } from './authSlice';
import { Dispatch } from "@reduxjs/toolkit";


export const login = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(loginIn());
  } catch (error) {
    console.error(error);
  }
}
