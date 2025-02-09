import firebase from 'firebase/compat/app';
import "firebase/compat/storage"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCnsJaXq_F79c0G9FS5HHecprhjMMm_df0",
//     authDomain: "newsblogupload.firebaseapp.com",
//     projectId: "newsblogupload",
//     storageBucket: "newsblogupload.appspot.com",
//     messagingSenderId: "285963662508",
//     appId: "1:285963662508:web:0c4b2920ee5978bee61b09",
//     measurementId: "G-7XC6WX5G20"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCwisbqwMrBXWs4SwaTOhzR0r-c1UtWLQ8",
    authDomain: "shop-95180.firebaseapp.com",
    projectId: "shop-95180",
    storageBucket: "shop-95180.appspot.com",
    messagingSenderId: "97842438943",
    appId: "1:97842438943:web:ec9b54e314ec571d83462a"
  };

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()

export default firebase

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCwisbqwMrBXWs4SwaTOhzR0r-c1UtWLQ8",
//   authDomain: "shop-95180.firebaseapp.com",
//   projectId: "shop-95180",
//   storageBucket: "shop-95180.appspot.com",
//   messagingSenderId: "97842438943",
//   appId: "1:97842438943:web:ec9b54e314ec571d83462a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//export default app;