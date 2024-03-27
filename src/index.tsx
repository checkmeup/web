import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppUI } from './app/app.ui';

// This is the entry point of the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppUI />
  </React.StrictMode>,
);
