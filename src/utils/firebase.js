// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVDMAmFqN62x7xUWFc7fV9kf0Ljxzn1So",
  authDomain: "netflix-arr.firebaseapp.com",
  projectId: "netflix-arr",
  storageBucket: "netflix-arr.appspot.com",
  messagingSenderId: "76697860545",
  appId: "1:76697860545:web:a4aa91369497281bbd1740",
  measurementId: "G-K25N6L0Y72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();