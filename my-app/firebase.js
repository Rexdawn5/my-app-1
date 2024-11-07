// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25M_2WBZu-Aj-HVZA6p80hIprdfre8xk",
  authDomain: "space-dogs-42b4b.firebaseapp.com",
  projectId: "space-dogs-42b4b",
  storageBucket: "space-dogs-42b4b.firebasestorage.app",
  messagingSenderId: "42567270183",
  appId: "1:42567270183:web:18fc13ad831e9889b0b302",
  measurementId: "G-00RGJ5NXCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);f