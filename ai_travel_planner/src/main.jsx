import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Add this line
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Header from './components/custom/Header'
import CreateTrip from './create-trip/CreateTrip'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />
    },
  
    {
      path: '/createtrip',
      element: <CreateTrip />
      },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)