import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxvWxDEjtZUNK5IMqMOFL5EWHQ75D0QaE",
  authDomain: "new-fitrution-app.firebaseapp.com",
  projectId: "new-fitrution-app",
  storageBucket: "new-fitrution-app.appspot.com",
  messagingSenderId: "940653783089",
  appId: "1:940653783089:web:5d4408ed9f7a6cfd000d10",
  measurementId: "G-BHBLEX5WNN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebaseApp };
export default db;

