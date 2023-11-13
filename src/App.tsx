import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { AppRoutes } from './data/routes';
import { Ivr } from './pages/Ivr';
import { Mentoring } from './pages/Mentor/Mentoring';
import { RootLayout } from './Layouts/RootLayout/RootLayout';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: AppRoutes.mtr,
        Component: Mentoring,
      },
      {
        path: AppRoutes.ivr,
        Component: Ivr,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
