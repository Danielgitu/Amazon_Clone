// Import the functions you need from the SDKs you need
import "firebase/compat/auth"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA19YVCiO805HY3fcVgDcVWdZ1QaNNH1kA",
  authDomain: "e-clone-2c2a3.firebaseapp.com",
  projectId: "e-clone-2c2a3",
  storageBucket: "e-clone-2c2a3.appspot.com",
  messagingSenderId: "322563007691",
  appId: "1:322563007691:web:c425c6ccf48245efafe74e",
  measurementId: "G-5K804B21QM",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };