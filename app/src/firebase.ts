import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChH9BvfMdKe6piBDn6Lnd-H6B8YPrfYbI",
  authDomain: "link-share-d2930.firebaseapp.com",
  projectId: "link-share-d2930",
  storageBucket: "link-share-d2930.appspot.com",
  messagingSenderId: "727981569274",
  appId: "1:727981569274:web:5cd289a9e21d2d48470543"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);