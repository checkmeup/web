import React from 'react';
import ReactDOM from 'react-dom/client';

import pkg from '../package.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>Hello checkmeup.net! Version: {pkg.version}</React.StrictMode>,
);
