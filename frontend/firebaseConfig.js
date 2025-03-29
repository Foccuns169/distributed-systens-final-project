// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD16QbqtN4qQcQqXcvkfzNZRo5vRMpJFTY",
  authDomain: "distributed-systens-project.firebaseapp.com",
  projectId: "distributed-systens-project",
  storageBucket: "distributed-systens-project.firebasestorage.app",
  messagingSenderId: "574611184618",
  appId: "1:574611184618:web:3335fab44f213a1f923093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);