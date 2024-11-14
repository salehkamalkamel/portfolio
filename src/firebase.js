// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDueHcSemmNNIZmS3J1fX0eb7xV0pXqlG0",
  authDomain: "saleh-kamal-portfolio.firebaseapp.com",
  projectId: "saleh-kamal-portfolio",
  storageBucket: "saleh-kamal-portfolio.firebasestorage.app",
  messagingSenderId: "1078205137763",
  appId: "1:1078205137763:web:b76157493038462c998956",
  measurementId: "G-4YVV6XB1PH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
