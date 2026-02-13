// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXWbHuWLux7_x3Ts_RamC-yz1bpHL32EE",
  authDomain: "geme-centr.firebaseapp.com",
  projectId: "geme-centr",
  storageBucket: "geme-centr.firebasestorage.app",
  messagingSenderId: "830360483817",
  appId: "1:830360483817:web:7a46c7cbbb109a29d1fd78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)