// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI09b-JJN9N2LqzY1-n8R-Hg1NuY_vjYw",
  authDomain: "nutritrack-31656.firebaseapp.com",
  projectId: "nutritrack-31656",
  storageBucket: "nutritrack-31656.firebasestorage.app",
  messagingSenderId: "132652093883",
  appId: "1:132652093883:web:43709c62cf4723510af49e",
  measurementId: "G-XRY0PX2VLN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
