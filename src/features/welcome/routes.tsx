import * as React from 'react';
import Welcome from './pages/Welcome/Welcome';
import SubRoute from "./pages/SubRoute/SubRoute";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

// TODO name enums

export const welcomeRoutes = [
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      {
        path: ':welId',
        element: <SubRoute />
      },
      {
        path: 'subRoute',
        element: <SubRoute />
      },
      {
        path: 'protectedRoute',
        element: <ProtectedRoute />
      }
    ]
  }
]
