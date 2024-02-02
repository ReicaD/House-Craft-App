import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0eNOxoLyp1Ef6YBKqdgzLGJCX90y06nw",
  authDomain: "housecraft-app.firebaseapp.com",
  projectId: "housecraft-app",
  storageBucket: "housecraft-app.appspot.com",
  messagingSenderId: "533324193465",
  appId: "1:533324193465:web:3113b09422d5e961970568",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//initializing firebase
export const db = getFirestore();
