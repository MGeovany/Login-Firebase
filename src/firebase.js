// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAakD5_d5wTeDwaw8gC_k2y4QB8N2Rvfxo",
  authDomain: "react-fb-auth-29137.firebaseapp.com",
  projectId: "react-fb-auth-29137",
  storageBucket: "react-fb-auth-29137.appspot.com",
  messagingSenderId: "193560610780",
  appId: "1:193560610780:web:f27db998136b20c3563119"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);