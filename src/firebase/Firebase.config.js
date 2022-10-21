// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv4SyMXRvdmNFQ2JvF1AvUtYeWFBadA4o",
  authDomain: "dragon-news-52e2c.firebaseapp.com",
  projectId: "dragon-news-52e2c",
  storageBucket: "dragon-news-52e2c.appspot.com",
  messagingSenderId: "926646459363",
  appId: "1:926646459363:web:ced048df38b67300599ed6",
  measurementId: "G-KP622915WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;