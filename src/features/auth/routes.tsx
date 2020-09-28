import * as React from 'react';
import AuthPage from "./pages/AuthPage";
import ForgotPass from "./pages/ForgotPass";

export const authRoutes = [
  {
    path: 'auth',
    element: <AuthPage />,
  },
  {
    path: 'forgotPa',
    element: <ForgotPass />,
  }
]
