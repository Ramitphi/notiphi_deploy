import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC3qQ2n_oJw2nGamSVIj_WjthfEcF7Xx60",
  authDomain: "notify-b19be.firebaseapp.com",
  projectId: "notify-b19be",
  storageBucket: "notify-b19be.appspot.com",
  messagingSenderId: "27715883902",
  appId: "1:27715883902:web:097d8270fc94e20142d92f",
  databaseURL: "https://notify.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
