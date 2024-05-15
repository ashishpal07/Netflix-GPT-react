// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAchSdb35VygYIQdhc9FtdGL1y890VD2i0",
  authDomain: "netflixgpt-397f8.firebaseapp.com",
  projectId: "netflixgpt-397f8",
  storageBucket: "netflixgpt-397f8.appspot.com",
  messagingSenderId: "780894287216",
  appId: "1:780894287216:web:70dab398dbe2b43c440bb5",
  measurementId: "G-5NPHS40BW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
