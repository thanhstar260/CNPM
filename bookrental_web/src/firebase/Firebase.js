// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIUrrQTjBAWIsGBtBYVPMmZCNIja7Lh7c",
  authDomain: "bookrental-ae411.firebaseapp.com",
  projectId: "bookrental-ae411",
  storageBucket: "bookrental-ae411.appspot.com",
  messagingSenderId: "301803774992",
  appId: "1:301803774992:web:93f14c21339ed1efe59695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;