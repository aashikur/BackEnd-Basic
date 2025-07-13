// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDli-s9NuoNxoemnRRcJ0MsFFTBpXnw1zA",
  authDomain: "dream-job-finder-9dbc8.firebaseapp.com",
  projectId: "dream-job-finder-9dbc8",
  storageBucket: "dream-job-finder-9dbc8.firebasestorage.app",
  messagingSenderId: "892507926394",
  appId: "1:892507926394:web:c135932878047d11a2f0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth