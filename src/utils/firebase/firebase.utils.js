import { initializeApp } from "firebase/app";
import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VUobCsTd-kqPVNp-TtOJ5F_oJpSKh5E",
  authDomain: "crwn-clothing-89f3b.firebaseapp.com",
  projectId: "crwn-clothing-89f3b",
  storageBucket: "crwn-clothing-89f3b.appspot.com",
  messagingSenderId: "900068415033",
  appId: "1:900068415033:web:227cb29050cfce7296dfe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  // Create a reference object to help firebase for the next methods we'll be using
  const userDocRef = doc(db, "users", userAuth.uid);

  // Create a snap shot using the reference
  const userSnapshot = await getDoc(userDocRef);
  //  if user data does not exist
  // create/set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
