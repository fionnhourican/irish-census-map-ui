import React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashboard from './pages/Dashboard';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
];

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
});

function DashboardLayoutBasic() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayoutBasic />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={theme}
      branding={{
        title: 'Irish Census Map',
      }}
    >
      <RouterProvider router={router} />
    </AppProvider>
  );
}

