import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAa88ey5wLgAnCShd_RhC5sOMyOuX6uU4A",
  authDomain: "twitter-clone-6b4b6.firebaseapp.com",
  databaseURL: "https://twitter-clone-6b4b6.firebaseio.com",
  projectId: "twitter-clone-6b4b6",
  storageBucket: "twitter-clone-6b4b6.appspot.com",
  messagingSenderId: "910774291189",
  appId: "1:910774291189:web:c1bab40ee2948f094a93bc",
  measurementId: "G-EZRJ405N2X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;