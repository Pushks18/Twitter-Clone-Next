// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDez_iyAqiYbPMotE4xCCHXTRmwGsIenf0",
  authDomain: "twitter-next-1a9fe.firebaseapp.com",
  projectId: "twitter-next-1a9fe",
  storageBucket: "twitter-next-1a9fe.appspot.com",
  messagingSenderId: "43043080997",
  appId: "1:43043080997:web:8ad23fc991de9d71c768cc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
