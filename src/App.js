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
// import LoginPage from "./pages/login.page";
// import UserProfileContainer from "./modules/auth/user-profile.container";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Postapp from "./pages/postapp.page";
import PostappContentContainer from "./modules/postapp/PostappContent";

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
          {/* <LoginPage /> */}
          {/* <UserProfileContainer /> */}
          <Postapp/>
          <PostappContentContainer/>
        </div>
        {/* <MainPage /> */}
        {/* <DragAndDrop /> */}
      </Provider>
    </>
  );
}
