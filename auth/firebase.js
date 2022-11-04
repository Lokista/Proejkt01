import { initializeApp , getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { secret } from "../secret/secret"
import { getDatabase  } from "firebase/database";
import "firebase/storage"
import {getFirestore, collection } from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNycUmgy7u2Br1-vWwuAOIfEn2EmBze2A",
  authDomain: "shoep-608cb.firebaseapp.com",
  databaseURL: "https://shoep-608cb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoep-608cb",
  storageBucket: "shoep-608cb.appspot.com",
  messagingSenderId: "4346193764",
  appId: "1:4346193764:web:19a20ed291370753363c71",
  measurementId: "G-1YZ1QZVJ3P"
};
  const app = initializeApp(firebaseConfig , "xd");
  


export const auth = getAuth(app)
export const db = getDatabase(app)
export const dbF = getFirestore(app);
export const colComRef = collection(dbF,'comments')
export const colProRef = collection(dbF , 'products')