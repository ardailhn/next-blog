// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "next-blog-398508.firebaseapp.com",
    projectId: "next-blog-398508",
    storageBucket: "next-blog-398508.appspot.com",
    messagingSenderId: "45713770239",
    appId: "1:45713770239:web:1d76866d9c8fcbc7ecaeca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);