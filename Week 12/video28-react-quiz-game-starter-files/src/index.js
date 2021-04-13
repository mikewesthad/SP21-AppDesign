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
