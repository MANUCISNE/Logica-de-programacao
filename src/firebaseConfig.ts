import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUT_ourgJil3tK8GYczvOWBjKLtnWXdIA",
  authDomain: "logica-de-programacao-befed.firebaseapp.com",
  projectId: "logica-de-programacao-befed",
  storageBucket: "logica-de-programacao-befed.appspot.com",
  messagingSenderId: "1094015724006",
  appId: "1:1094015724006:web:c98e0aab85a24bc9edce27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
