import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from "../index";
import {fetchUser} from "../../services/api/auth";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  isAttendee: boolean;
}

type authState = {
  loading: boolean;
  user: User | undefined; // TODD: Add user in Model;
  error: string | null;
}

const initialState: authState = {
  loading: false,
  user: undefined,
  error: null,
};

const authSlice = createSlice({
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
} = authSlice.actions

export const auth = authSlice.reducer;

// Maybe we should add a middleware for this?
// How to decompose this functions and how to call their?

export const getUser = (userId: number): AppThunk => async dispatch => {
  try {
    dispatch(getUserStart());
    const user = await fetchUser(userId);
    dispatch(getUserSuccess(user))
  } catch(error) {
    dispatch(getUserFailed(error))
  }
}
