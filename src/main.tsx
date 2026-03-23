import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './App.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
)
