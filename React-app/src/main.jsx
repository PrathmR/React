import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as BrouserRouter } from 'react-router-dom'
//import App from './App.jsx'
import App from './TikTok UI/App.jsx';
import './AppSingleQ.css'
createRoot(document.getElementById('root')).render(
  <BrouserRouter>
    <App />
    </BrouserRouter>
  
)
