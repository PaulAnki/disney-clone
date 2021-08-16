import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBztUmXyWBKQBAd3JUbJa6kzt5Xe9Od83c",
  authDomain: "disney-clone-39eec.firebaseapp.com",
  projectId: "disney-clone-39eec",
  storageBucket: "disney-clone-39eec.appspot.com",
  messagingSenderId: "638721212383",
  appId: "1:638721212383:web:4977bcbda2d5dd3f388e6a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
