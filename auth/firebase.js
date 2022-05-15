// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCiK4g1_f8xQQJF9qn4e9zMzf1S5KlKuHQ",
  authDomain: "shoep-31173.firebaseapp.com",
  projectId: "shoep-31173",
  storageBucket: "shoep-31173.appspot.com",
  messagingSenderId: "502123650225",
  appId: "1:502123650225:web:1689faa2804f1b5b101690",
  measurementId: "G-SM6Q0G654B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()