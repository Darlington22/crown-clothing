import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPPBczG4wcSQ499UC5MfbLDkiVO3qzs6o",
    authDomain: "crown-db-cb3e0.firebaseapp.com",
    databaseURL: "https://crown-db-cb3e0.firebaseio.com",
    projectId: "crown-db-cb3e0",
    storageBucket: "",
    messagingSenderId: "1070290634890",
    appId: "1:1070290634890:web:8a74470014ffeadf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;