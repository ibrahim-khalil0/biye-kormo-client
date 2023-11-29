// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCepps6GNehgt8n4_zxcAZnTc-P31uHOUI",
  authDomain: "biye-kormo-539f5.firebaseapp.com",
  projectId: "biye-kormo-539f5",
  storageBucket: "biye-kormo-539f5.appspot.com",
  messagingSenderId: "327251975604",
  appId: "1:327251975604:web:d5bf1fa70f7848145f26e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth