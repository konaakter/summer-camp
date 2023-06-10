// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


/*

 apiKey: "AIzaSyC-rYJmyHhenWeQiQnnpQKq069_pRkMRHU",
  authDomain: "summer-camp-176d3.firebaseapp.com",
  projectId: "summer-camp-176d3",
  storageBucket: "summer-camp-176d3.appspot.com",
  messagingSenderId: "588783172828",
  appId: "1:588783172828:web:76da4380bf6312261f4819"
  */