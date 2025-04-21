import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Check if the env variable is properly loaded
const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

if (!firebaseApiKey) {
  console.error("❌ Missing Firebase API Key in .env file!");
} else {
  console.log("✅ Firebase API Key loaded successfully.");
}

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "travello-76672.firebaseapp.com",
  projectId: "travello-76672",
  storageBucket: "travello-76672.appspot.com",
  messagingSenderId: "1052289822749",
  appId: "1:1052289822749:web:06da006cf0614f8df216f4",
  measurementId: "G-N8XT8DXRJY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Debug logs to make sure everything is loaded correctly
console.log("✅ Firebase initialized");
console.log("🔥 Firestore instance:", db);

export { app, db };
