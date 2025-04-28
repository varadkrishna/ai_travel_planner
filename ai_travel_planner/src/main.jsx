import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/CreateTrip';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]/ViewTrip.jsx';
import MyTrips from './my-trips/MyTrips';
import { db } from '@firebase';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/createtrip', element: <CreateTrip /> },
  { path: '/view-trip/:tripId', element: <ViewTrip /> },  // <-- Add comma here
  { path: '/my-trips', element: <MyTrips /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
