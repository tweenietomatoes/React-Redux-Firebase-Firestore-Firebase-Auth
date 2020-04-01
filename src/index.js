import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { store } from "./redux/store";
import types from "./redux/user/user.types";

let firebaseConfig = {
  apiKey: "AIzaSyDaFV2Plf6rW5zMYILFVPOzNFBKmfF53f8",
  authDomain: "test-project-f44ec.firebaseapp.com",
  databaseURL: "https://test-project-f44ec.firebaseio.com",
  projectId: "test-project-f44ec",
  storageBucket: "test-project-f44ec.appspot.com",
  messagingSenderId: "699585761942",
  appId: "1:699585761942:web:54ccee1633145227cfa8b7",
  measurementId: "G-D9C5J7TXWW"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch({ type: types.WATCH_AUTH });
  } else {
    console.log("!!! user not logged in.");
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
