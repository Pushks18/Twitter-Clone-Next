// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDoUFh5UvSl6MO4tsl3MQdwSccLg3avM8",
  authDomain: "twitter-clone-12adc.firebaseapp.com",
  projectId: "twitter-clone-12adc",
  storageBucket: "twitter-clone-12adc.appspot.com",
  messagingSenderId: "832446324240",
  appId: "1:832446324240:web:2f1daf278f3647bfc53495",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
