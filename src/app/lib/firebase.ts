// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKndJVT1LhsKc_PtyLMyOAScq-SxgiS5k",
  authDomain: "my-app-41475.firebaseapp.com",
  projectId: "my-app-41475",
  storageBucket: "my-app-41475.appspot.com",
  messagingSenderId: "318838496523",
  appId: "1:318838496523:web:9f64673a8be106002e560e",
  measurementId: "G-Y45F19REBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);