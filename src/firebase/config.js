import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { dbError_cloned } from "../constants/text";

const firebaseConfig = {
  apiKey: null,
  authDomain: null,
  projectId: null,
  storageBucket: null,
  messagingSenderId: null,
  appId: null
}; // Firebase information removed on GitHub

initializeApp(firebaseConfig); // init firebase
const db = getFirestore(); // init firestore

if (!firebaseConfig.projectId) alert(dbError_cloned);

export {db};