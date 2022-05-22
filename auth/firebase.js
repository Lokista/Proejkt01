import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { secret } from "../secret/secret"

const firebaseConfig = {
  apiKey: secret.apiKey,
  authDomain: secret.authDomain,
  projectId: secret.projectId,
  storageBucket: secret.storageBucket,
  messagingSenderId: secret.messagingSenderId,
  appId: secret.appId,
  measurementId: secret.measurementId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()