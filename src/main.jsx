import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DOMProvider } from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DOMProvider>
        <App />
    </DOMProvider>
  </StrictMode>,
)
