import * as React from 'react';
import { Redirect } from 'react-router-dom';
import AuthPage from "../features/auth/pages/AuthPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";

export const routes: Array<any> = [
    {
        path: '/auth',
        component: AuthPage,
        routes: [
            {
                path: '/auth/forgotPass',
                component: ForgotPasswordPage,
            }
        ]
    },
    {
        path: '/',
        component: () => <Redirect to="/auth" />,
    }
]
