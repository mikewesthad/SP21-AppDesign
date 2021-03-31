// Brings in the core functionality:
import firebase from "firebase/app";

// This brings in the firestore functionality:
import "firebase/firestore";

// TODO: this shouldn't be directly in our source code. We don't want to commit
// this to GitHub.
const firebaseConfig = {
  apiKey: "=== INSERT YOUR CREDENTIALS ===",
  authDomain: "=== INSERT YOUR CREDENTIALS ===",
  projectId: "=== INSERT YOUR CREDENTIALS ===",
  storageBucket: "=== INSERT YOUR CREDENTIALS ===",
  messagingSenderId: "=== INSERT YOUR CREDENTIALS ===",
  appId: "=== INSERT YOUR CREDENTIALS ===",
  measurementId: "=== INSERT YOUR CREDENTIALS ===",
};

// To help us with debugging later!
if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
if (!firebaseConfig.messagingSenderId)
  throw new Error("Missing firebase credential: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
if (!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
