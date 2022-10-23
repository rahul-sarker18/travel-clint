// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// const app = initializeApp(firebaseConfig);

// export default app;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9cG2z_yKqdzuoxNLu8D49Qr0dEfgizZE",
  authDomain: "travel-clint.firebaseapp.com",
  projectId: "travel-clint",
  storageBucket: "travel-clint.appspot.com",
  messagingSenderId: "205004502926",
  appId: "1:205004502926:web:8dc0ec7f2f03975e9d96df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;