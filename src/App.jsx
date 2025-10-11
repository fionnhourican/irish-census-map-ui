import React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import MapIcon from '@mui/icons-material/Map';
import BarChartIcon from '@mui/icons-material/BarChart';
import Map from './pages/Map';
import Charts from './pages/Charts';

const NAVIGATION = [
  {
    segment: 'map',
    title: 'Map',
    icon: <MapIcon />,
  },
  {
    segment: 'charts',
    title: 'Charts',
    icon: <BarChartIcon />,
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
        element: <Map />,
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'charts',
        element: <Charts />,
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

