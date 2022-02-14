import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZGsxVJJLto0WdftTA1Bu8skSOuBZiO0w",
  authDomain: "clone-be5c4.firebaseapp.com",
  projectId: "clone-be5c4",
  storageBucket: "clone-be5c4.appspot.com",
  messagingSenderId: "593292189955",
  appId: "1:593292189955:web:335f0589f58ce134b28936",
  measurementId: "G-PLYLFBGDG9"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };