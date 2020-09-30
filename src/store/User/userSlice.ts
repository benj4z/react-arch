import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/User';

import { state } from './state';

const userSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    getUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, { payload }: PayloadAction<User | undefined>) {
      state.user = payload;
    },
    getUserFailed(state, { payload }: PayloadAction<Error>) {
      state.error = payload.message;
    }
  }
})

export const {
  getUserStart,
  getUserFailed,
  getUserSuccess,
} = userSlice.actions

export const user = userSlice.reducer;


