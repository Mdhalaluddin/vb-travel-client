// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmwqwsRSIVTdL27o5QB2HOHyvs2cQmTsY",
  authDomain: "vb-travel.firebaseapp.com",
  projectId: "vb-travel",
  storageBucket: "vb-travel.appspot.com",
  messagingSenderId: "256117475047",
  appId: "1:256117475047:web:4df93814cffbac6b844442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;