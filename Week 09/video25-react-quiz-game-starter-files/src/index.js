import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { db } from "./data/firebase";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

async function readAllUsers() {
  try {
    // Long way:
    // const collectionRef = db.collection("users");
    // const getPromise = collectionRef.get();
    // const snapshot = await getPromise;

    // Short way:
    // const snapshot = await db.collection("users").get();

    const snapshot = await db.collection("users").where("isOnline", "==", true).get();

    console.log(`Found ${snapshot.size}x user(s).`);
    const docs = snapshot.docs;
    docs.forEach((docSnapshot) => {
      console.log(docSnapshot.id, docSnapshot.data());
    });
  } catch (err) {
    console.error(err);
  }
}

readAllUsers();
