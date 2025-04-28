// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR_3-kTaqHAv8qchY7HrIQ8NiuoDZGupI",
  authDomain: "cinemawala-dbe8e.firebaseapp.com",
  projectId: "cinemawala-dbe8e",
  storageBucket: "cinemawala-dbe8e.firebasestorage.app",
  messagingSenderId: "863726090675",
  appId: "1:863726090675:web:b43fee951b390288f333c6",
  measurementId: "G-X71G69HYJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);