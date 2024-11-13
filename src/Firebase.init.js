// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCG4Fd_9y1kFC3mWPziyxsrtmTy9cxJBc",
  authDomain: "auth-moha-milon-16753.firebaseapp.com",
  projectId: "auth-moha-milon-16753",
  storageBucket: "auth-moha-milon-16753.firebasestorage.app",
  messagingSenderId: "938237498188",
  appId: "1:938237498188:web:2ad1c9c3cffb8e84fbf5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);