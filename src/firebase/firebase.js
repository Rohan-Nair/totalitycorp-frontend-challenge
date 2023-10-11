// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhDfHQw1OCz8qGySdxt9PeB6zOYZCl-n4",
  authDomain: "totality-main.firebaseapp.com",
  projectId: "totality-main",
  storageBucket: "totality-main.appspot.com",
  messagingSenderId: "914710823766",
  appId: "1:914710823766:web:267920e0967a0be8974cf7",
  measurementId: "G-557WZFBL7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
