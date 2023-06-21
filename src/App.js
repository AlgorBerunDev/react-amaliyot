import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ImageListContainer from "./modules/image-list/image-list.container";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ImageListContainer />
      </Provider>
    </>
  );
}
