import firebase from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDy_NrnLoNkKQu-ZMZ16oJBMOWMkhGvKVU",
  authDomain: "linkedin-clone-edf2a.firebaseapp.com",
  projectId: "linkedin-clone-edf2a",
  storageBucket: "linkedin-clone-edf2a.appspot.com",
  messagingSenderId: "1080162683684",
  appId: "1:1080162683684:web:7e459741fec70b7f1881b1",
  measurementId: "G-SC3KLDR5QG"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };