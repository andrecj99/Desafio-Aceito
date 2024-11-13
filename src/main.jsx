import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div 
      style={{width: '600px', height: '300px'}} 
      className="relative flex flex-col space-y-8 items-center bg-red-700 m-auto my-20 border rounded-3xl text-3xl text-white">
          
          <App />
      
      </div>
  </StrictMode>,
)
