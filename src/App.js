import React from "react";
// import { Provider } from "react-redux";
// import store from "./store";
// import MainPage from "./pages/main.page";
// import DragAndDrop from "./pages/drag-n-drop";
// import MainPage from "./pages/home.page";
import { Provider } from "react-redux";
import store from "./store";
// import MainPage from "./pages/main.page";
// import DragAndDrop from "./pages/drag-n-drop";
import LoginPage from "./pages/login.page";
import UserProfileContainer from "./modules/auth/user-profile.container";

export default function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <MainPage /> */}
      {/* <DragAndDrop /> */}
      {/* <MainPage/> */}
      {/* </Provider> */}
      <Provider store={store}>
        <div>
          <LoginPage />
          <UserProfileContainer />
        </div>
        {/* <MainPage /> */}
        {/* <DragAndDrop /> */}
      </Provider>
    </>
  );
}
