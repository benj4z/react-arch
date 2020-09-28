import * as React from 'react';
import Welcome from './pages/Welcome/Welcome';
import SubRoute from "./pages/SubRoute/SubRoute";

export const welcomeRoutes = [
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      {
        path: 'subRoute',
        element: <SubRoute />
      }
    ]
  }
]
