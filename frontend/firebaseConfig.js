// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtpI7RaNjXNr1X4KJzJEP8erSvnSdElXI",
  authDomain: "distributed-systems-proj-3c6a6.firebaseapp.com",
  databaseURL: "https://distributed-systems-proj-3c6a6-default-rtdb.firebaseio.com",
  projectId: "distributed-systems-proj-3c6a6",
  storageBucket: "distributed-systems-proj-3c6a6.firebasestorage.app",
  messagingSenderId: "729209546156",
  appId: "1:729209546156:web:757d3e95f7f3d903fa0609",
  measurementId: "G-DN5EEMWY2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);