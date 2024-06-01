// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxELSQEX7JjTBUEbUDwPqXpX8wSMAQPBI",
  authDomain: "study-circle-a12.firebaseapp.com",
  projectId: "study-circle-a12",
  storageBucket: "study-circle-a12.appspot.com",
  messagingSenderId: "257279305420",
  appId: "1:257279305420:web:8c93021cca0b6441e20469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;