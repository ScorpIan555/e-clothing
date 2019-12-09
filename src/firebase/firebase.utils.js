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
//initialize firebase object instance
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log("snapShot:::", snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user:::", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionKey:::", collectionKey);
  console.log("collectionRef:::", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log("newDocRef:::", newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

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
