import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./view/components/Router/AppRouter";

// import { store } from "./data/store";
// import { Provider } from "react-redux";

import "./view/assets/styles/scss/main.scss";
import "macro-css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <AppRouter />
  // </Provider>
);
