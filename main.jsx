import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css/'

createRoot(document.getElementById('root')).render(
  //this is responsble when we used the props then
  // this effect to make a duplication 
  <StrictMode>
    <App />
   </StrictMode>,
)
