import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as BrouserRouter } from 'react-router-dom'
import App from './App.jsx'
import './AppSingleQ.css'
createRoot(document.getElementById('root')).render(
  <BrouserRouter>
    <App />
    </BrouserRouter>
  
)
