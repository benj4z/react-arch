import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { authRoutes } from '../features/auth/routes';
import { welcomeRoutes } from "../features/welcome/routes";

export const router = [
  ...authRoutes,
  ...welcomeRoutes,
    {
        path: '/',
        element: <Navigate to="/welcome" />
    }
]
