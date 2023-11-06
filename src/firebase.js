// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ae8d8.firebaseapp.com",
  projectId: "mern-estate-ae8d8",
  storageBucket: "mern-estate-ae8d8.appspot.com",
  messagingSenderId: "102878402465",
  appId: "1:102878402465:web:581f5e0c49d8769afd1de0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);