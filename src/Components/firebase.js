// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHalLzD3uCRUJd_ExpYWU2hHgrRl9AO4",
  authDomain: "instalinks-d466e.firebaseapp.com",
  projectId: "instalinks-d466e",
  storageBucket: "instalinks-d466e.appspot.com",
  messagingSenderId: "402630220825",
  appId: "1:402630220825:web:d3ae8e89632842ccff1e88",
  measurementId: "G-GP9DV0MCVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
