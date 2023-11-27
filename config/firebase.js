import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpo9N1P9xiAO2wnNbzbO6NQwd594jaACg",
  authDomain: "streactfb.firebaseapp.com",
  projectId: "streactfb",
  storageBucket: "streactfb.appspot.com",
  messagingSenderId: "287872267084",
  appId: "1:287872267084:web:45b2fd696585faee1155e9",
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export { auth };