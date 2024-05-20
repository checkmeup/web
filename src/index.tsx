import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'

// This is the entry point of the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
