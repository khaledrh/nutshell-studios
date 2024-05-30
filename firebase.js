// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwUh-2T1_0Ctmwq63PRLZyp6Ag3S5cPMM",
  authDomain: "nutshell-400015.firebaseapp.com",
  projectId: "nutshell-400015",
  storageBucket: "nutshell-400015.appspot.com",
  messagingSenderId: "866986615550",
  appId: "1:866986615550:web:4e58b226d7f741e095fbaf",
  measurementId: "G-4CFPRSGGYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);