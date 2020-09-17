import * as React from 'react';
import AuthPage from "./Pages/AuthPage";
import ForgotPass from "./Pages/ForgotPass";

export const router = [
    {
        path: 'auth',
        element: <AuthPage />,
        children: [
            {
                path: ':authId',
                element: <ForgotPass />,
            }
        ]
    }
]
