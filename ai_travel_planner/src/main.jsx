import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Add this line
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
)