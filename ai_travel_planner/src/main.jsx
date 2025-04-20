import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Add this line
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
// import Header from './components/custom/Header'
import CreateTrip from './create-trip/CreateTrip'
import { Toaster } from 'sonner'

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
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Toaster />
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
)