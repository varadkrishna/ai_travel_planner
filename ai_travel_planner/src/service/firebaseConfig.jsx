// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3xzZvDn6--eBrG897gHdYY-VRv9-enoA",
  authDomain: "travello-76672.firebaseapp.com",
  projectId: "travello-76672",
  storageBucket: "travello-76672.appspot.com", // <-- corrected here
  messagingSenderId: "1052289822749",
  appId: "1:1052289822749:web:06da006cf0614f8df216f4",
  measurementId: "G-N8XT8DXRJY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
