// Import the functions you need from the SDKs you need
// denger donot share it


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



import { getAuth } from "firebase/auth";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBem0w748XRkxJU7NnHX4dnerZ1TfpJuW0",
  authDomain: "fir-project-1-c1462.firebaseapp.com",
  projectId: "fir-project-1-c1462",
  storageBucket: "fir-project-1-c1462.firebasestorage.app",
  messagingSenderId: "821118827619",
  appId: "1:821118827619:web:0e1e71afaf0b23ad408c56",
  measurementId: "G-G1BPHL39MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
