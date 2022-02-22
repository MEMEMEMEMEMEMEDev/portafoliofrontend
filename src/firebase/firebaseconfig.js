import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  projectId: "portfolio-contact-32ad8",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
});

const db = getFirestore(firebaseApp);

export { db };
