// import firebase from "firebase/app";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiiAwf_OgA4-df7qli4qE8ivY6sRDxkIs",
  authDomain: "simpleshubtest.firebaseapp.com",
  projectId: "simpleshubtest",
  storageBucket: "simpleshubtest.appspot.com",
  messagingSenderId: "830635481875",
  appId: "1:830635481875:web:52973cf79811d0ffea18e6",
  measurementId: "G-MMSJSG8H82",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


