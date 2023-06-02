import React from "react";
import { Provider } from "react-redux";
// import store from "./store";
import MainPage from "./pages/main.page";
import DragAndDrop from "./pages/drag-n-drop";
import Test from "./pages/test";

export default function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <MainPage /> */}
      {/* <DragAndDrop /> */}
      {/* </Provider> */}
      <Test/>
    </>
  );
}
