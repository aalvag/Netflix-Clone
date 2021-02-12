import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7olQD_Y-fg39b3hibh33R5QYZ2lq8whU",
  authDomain: "netflix-clone-5f05b.firebaseapp.com",
  projectId: "netflix-clone-5f05b",
  storageBucket: "netflix-clone-5f05b.appspot.com",
  messagingSenderId: "1068174245240",
  appId: "1:1068174245240:web:622bcc6832e8180590dc8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
