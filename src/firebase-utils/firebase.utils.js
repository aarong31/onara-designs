import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD24tJA-xRsXr71rzNxap06sFqydHbtVDw",
    authDomain: "onara-designs.firebaseapp.com",
    databaseURL: "https://onara-designs.firebaseio.com",
    projectId: "onara-designs",
    storageBucket: "onara-designs.appspot.com",
    messagingSenderId: "553465028407",
    appId: "1:553465028407:web:857eb8c2c6ea42cc1984b2",
    measurementId: "G-QL54TFCRED"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;