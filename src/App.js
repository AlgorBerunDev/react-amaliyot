import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import MainPage from "./pages/main.page";
// import DragAndDrop from "./pages/drag-n-drop";
import LoginPage from "./pages/login.page";
import UserProfileContainer from "./modules/auth/user-profile.container";
import ImagePage from "./pages/image.page";
import Image from "./components/image";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          {/* <LoginPage /> */}
          {/* <UserProfileContainer /> */}
          <Image src="https://placehold.co/sdgdsg600x400" alt="sdgfsdg" errorSrc="/images/oops.avif" />
        </div>
      </Provider>
    </>
  );
}
