import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCbniuYSYfHWN779lE0VxSlwnswuxYkyXA",
  authDomain: "luxery-db.firebaseapp.com",
  projectId: "luxery-db",
  storageBucket: "luxery-db.appspot.com",
  messagingSenderId: "251835183117",
  appId: "1:251835183117:web:284c96f22329cf9f2a2544",
  measurementId: "G-FHV7ZQWQ35"
};

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
      })

    } catch (error) {
      console.log("error creating user", error.messgae);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;