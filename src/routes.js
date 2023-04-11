import EstablishmentPage from "./pages/EstablishmentPage";
import ClassroomPage from "./pages/ClassroomPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { LayoutType } from "./layouts/Layout";

const routes = [
  {
    path: "/establishments",
    isPrivate: true,
    layoutType: LayoutType.main,
    children: <EstablishmentPage />,
  },
  {
    path: "/classrooms",
    isPrivate: true,
    layoutType: LayoutType.main,
    children: <ClassroomPage />,
  },
  {
    path: "/signin",
    layoutType: LayoutType.default,
    children: <Signin />,
  },
  {
    path: "/signup",
    layoutType: LayoutType.default,
    children: <Signup />,
  },
];

export default routes;
