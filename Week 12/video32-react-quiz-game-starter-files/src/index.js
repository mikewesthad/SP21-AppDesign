import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import loadSampleData from "./data/sample-data/load-sample-data";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
