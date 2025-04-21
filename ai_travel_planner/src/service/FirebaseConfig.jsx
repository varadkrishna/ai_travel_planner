// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xzZvDn6--eBrG897gHdYY-VRv9-enoA",
  authDomain: "travello-76672.firebaseapp.com",
  projectId: "travello-76672",
  storageBucket: "travello-76672.firebasestorage.app",
  messagingSenderId: "1052289822749",
  appId: "1:1052289822749:web:06da006cf0614f8df216f4",
  measurementId: "G-N8XT8DXRJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);