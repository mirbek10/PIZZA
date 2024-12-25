import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContext from './context/AppContext.jsx'
import {BrowserRouter, Routes, Route } from 'react-router'
import Cart from './pages/cart/Cart'
// import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <StrictMode>
    <AppContext>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </AppContext>
  </StrictMode>,
</BrowserRouter>
)

// SPA 