import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import React from 'react'
import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Home />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
