import { initializeApp , getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { secret } from "../secret/secret"
import { getDatabase  } from "firebase/database";
import "firebase/storage"
import {getFirestore, collection } from  "firebase/firestore"

const firebaseConfig = {
  apiKey: secret.apiKey,
  authDomain: secret.authDomain,
  databaseURL: secret.databaseURL,
  projectId: secret.projectId,
  storageBucket: secret.storageBucket,
  messagingSenderId: secret.messagingSenderId,
  appId: secret.appId,
  measurementId: secret.measurementId
};
  const app = initializeApp(firebaseConfig , "xd");
  


export const auth = getAuth(app)
export const db = getDatabase(app)
export const dbF = getFirestore(app);
export const colComRef = collection(dbF,'comments')
export const colProRef = collection(dbF,'products')
export const colProtRef = collection(dbF,'productst')
export const colContactRef = collection(dbF,'contact')