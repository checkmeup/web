import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, Text } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import pkg from '../package.json';

import '@mantine/core/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Text>Hello checkmeup.net! Version: {pkg.version}</Text>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
