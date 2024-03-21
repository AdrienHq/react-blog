// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "react-blog-a1115.firebaseapp.com",
    projectId: "react-blog-a1115",
    storageBucket: "react-blog-a1115.appspot.com",
    messagingSenderId: "935841319203",
    appId: "1:935841319203:web:efb42ca919a4275a23e496",
    measurementId: "G-11BPDR6D84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

