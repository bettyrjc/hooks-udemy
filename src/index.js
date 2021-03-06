import React from "react";
import ReactDOM from "react-dom";

// import App from "./HookApp";
// import Counter from "./components/useState/Counter";
import SimpleForm from "./components/8-useContext/MainApp";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import "./components/7-useReducer/intro-reducer";
