import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { rootReducer, RootState } from './rootReducer';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger] as const
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;
