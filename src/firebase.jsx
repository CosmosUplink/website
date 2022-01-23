import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMfiBoDcJMb_aI1FhKJp7MUm_oyGdx1n4",
  authDomain: "cosmosuplink.firebaseapp.com",
  projectId: "cosmosuplink",
  storageBucket: "cosmosuplink.appspot.com",
  messagingSenderId: "560129517911",
  appId: "1:560129517911:web:d1dafcf17da6faf7897612",
  measurementId: "G-NMC8RC2DMT"
};

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore();


export {firestore, firebase}