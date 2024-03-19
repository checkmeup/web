import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, Text } from '@mantine/core';

import pkg from '../package.json';

import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Text>Hello checkmeup.net! Version: {pkg.version}</Text>
    </MantineProvider>
  </React.StrictMode>,
);
