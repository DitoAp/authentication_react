// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpV9F7IoRElBc9EEzLIweRubDw022oztg",
    authDomain: "mood-meter-694f4.firebaseapp.com",
    projectId: "mood-meter-694f4",
    storageBucket: "mood-meter-694f4.appspot.com",
    messagingSenderId: "361470965720",
    appId: "1:361470965720:web:cef2c979f74ea4821a24ad"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };