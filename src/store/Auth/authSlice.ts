import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AppThunk } from "../index";

type authState = {
  logged: boolean,
}

const initialState: authState = {
  logged: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginIn(state) {
      state.logged = true;
    },
  }
})

export const {
  loginIn
} = authSlice.actions;

export const auth = authSlice.reducer;


