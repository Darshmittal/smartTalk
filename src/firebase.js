import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgdJI8R2p_D-aBPol5yR9evbGsv9VufFM",
    authDomain: "chatt-a5754.firebaseapp.com",
    projectId: "chatt-a5754",
    storageBucket: "chatt-a5754.appspot.com",
    messagingSenderId: "667259948791",
    appId: "1:667259948791:web:28382e6f149abe964e4df2",
    measurementId: "G-MFF3T7XQGP"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()