import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/User';

type userState = {
  loading: boolean;
  user: User | undefined;
  error: string | null;
}

const initialState: userState = {
  loading: false,
  user: undefined,
  error: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
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


