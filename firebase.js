import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBVZaFYzS5ykYeUjh1CFAczHar9hlCVFyk",
  authDomain: "clone-69101.firebaseapp.com",
  projectId: "clone-69101",
  storageBucket: "clone-69101.appspot.com",
  messagingSenderId: "628120678",
  appId: "1:628120678:web:56506ce11bad85cb6ba1a7",
  measurementId: "G-PSDXCRWL4C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };