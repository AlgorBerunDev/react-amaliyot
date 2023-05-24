import React from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store";
import "./css/layout.css";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
