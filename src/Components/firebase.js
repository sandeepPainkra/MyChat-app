// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBIcy0CeSC8XqinCPS6CwmBUseE-y3_01c",
  authDomain: "mychat-85d91.firebaseapp.com",
  projectId: "mychat-85d91",
  storageBucket: "mychat-85d91.appspot.com",
  messagingSenderId: "272917180009",
  appId: "1:272917180009:web:f1c855506161abfcb33cf8",
  measurementId: "G-8GTHWVNJTM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
