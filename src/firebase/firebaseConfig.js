// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2TRF0BunLWnsy7CVkNc1UTRjWJSLzcc",
  authDomain: "brand-shop-express-mongodb.firebaseapp.com",
  projectId: "brand-shop-express-mongodb",
  storageBucket: "brand-shop-express-mongodb.appspot.com",
  messagingSenderId: "498702243591",
  appId: "1:498702243591:web:a2a5002d30cc998a9e17a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);