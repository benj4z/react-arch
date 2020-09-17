import * as React from 'react';
import { Navigate } from 'react-router-dom';
import {router as AuthRouter} from '../features/auth/routes';

export const router = [
    ...AuthRouter,
    {
        path: '/',
        element: <Navigate to="/auth" />
    }
]
