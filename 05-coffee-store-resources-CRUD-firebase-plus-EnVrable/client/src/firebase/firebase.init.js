// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEFY2czg0mPUYLb0MOAtQMNMC7OmXvvG4",
  authDomain: "coffee-user-data.firebaseapp.com",
  projectId: "coffee-user-data",
  storageBucket: "coffee-user-data.firebasestorage.app",
  messagingSenderId: "681069923220",
  appId: "1:681069923220:web:becb0e0c664d693cc2dd81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;