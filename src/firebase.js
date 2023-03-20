// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcyC4bqawF0Dj-zpOH3nrt2gT3hVVwnE",
  authDomain: "climbing-walls-krakow.firebaseapp.com",
  projectId: "climbing-walls-krakow",
  storageBucket: "climbing-walls-krakow.appspot.com",
  messagingSenderId: "504876112818",
  appId: "1:504876112818:web:bbf90062cdb6fbc82162ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
