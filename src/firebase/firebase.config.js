// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt425UwNcfqxLIP_VaRxjg-ldGruF622o",
  authDomain: "the-news-dragon-df192.firebaseapp.com",
  projectId: "the-news-dragon-df192",
  storageBucket: "the-news-dragon-df192.appspot.com",
  messagingSenderId: "898147230811",
  appId: "1:898147230811:web:3d16d9232912ff26b78b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;