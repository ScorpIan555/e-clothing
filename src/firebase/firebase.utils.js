import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSr5-XzzfgkVQBDWykuUUyQ7d52blO9aE",
  authDomain: "corona-ropa.firebaseapp.com",
  databaseURL: "https://corona-ropa.firebaseio.com",
  projectId: "corona-ropa",
  storageBucket: "corona-ropa.appspot.com",
  messagingSenderId: "478226796724",
  appId: "1:478226796724:web:7f99b39a42fc851f81c7e1",
  measurementId: "G-97231WFV4N"
};

firebase.initializeApp(config);

// initialize and export auth & firestore objects
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// initialize and export Google auth provider object
const provider = new firebase.auth.GoogleAuthProvider();
// configure Google auth provider prompt
provider.setCustomParameters({ prompt: "select_account" });
// initialize and export configured auth provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
